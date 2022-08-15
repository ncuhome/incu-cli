# incu-cli

## Usage

### Basic

```bash
$ npx incu http://incu.ncuos.com/

Open http://incu.ncuos.com/ in iNCU

✅ Android
❌ iOS Simulator

```

### Help

```bash
$ npx incu -h

incu

Usage:
  $ incu <command> [options]

Commands:
  url  Open url in Android/iOS simulator

For more info, run any command with the `--help` flag:
  $ incu url --help

Options:
  --only-android  Only open url in Android through ADB (default: false)
  --only-ios      Only open url in iOS Simulator (default: false)
  -h, --help      Display this message
```

## License

[MIT](LICENSE)
