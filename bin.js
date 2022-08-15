import cac from 'cac'
import { openUrl } from './dist/index.js'
import kleur from 'kleur'

const cli = cac('incu')

cli.command('url', 'Open url in Android/iOS simulator')

cli.option('--only-android', 'Only open url in Android through ADB', {
  default: false
})
cli.option('--only-ios', 'Only open url in iOS Simulator', {
  default: false
})

cli.help()

const parsed = cli.parse()

const { args, h, onlyAndroid, onlyIos } = parsed

const main = async () => {
  if (h) {
    return
  }

  const url = args[0]

  const result = (platforms) => {
    console.log(`Open ${kleur.blue().underline(url)} in iNCU\n`)
    platforms.forEach(platform => {
      const status = platform.ok ? '✅' : '❌'
      console.log(`${status} ${platform.name}`)
    })
    console.log()
  }

  if (url) {
    if (!onlyAndroid && !onlyIos) {
      const androidOk = await openUrl(url, 'android')
      const iosOk = await openUrl(url, 'ios', true)
      result([
        { name: 'Android', ok: androidOk },
        { name: 'iOS Simulator', ok: iosOk }
      ])
      return
    }
    if (onlyAndroid && onlyIos) {
      throw new Error('You should specify one of --only-android or --only-ios')
    }
    if (onlyAndroid) {
      const ok = await openUrl(url, 'android')
      result([
        { name: 'Android', ok}
      ])
    }
    if (onlyIos) {
      const ok = await openUrl(url, 'ios')
      result([
        { name: 'iOS Simulator', ok }
      ])
    }
  }
}

main()
