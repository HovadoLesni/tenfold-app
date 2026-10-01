# Tenfold — Touch Typing Trainer (Desktop App)

**Version 1.5.0** — see [CHANGELOG.md](./CHANGELOG.md) for what changed.

A standalone desktop version of the Tenfold typing trainer, built with
[Electron](https://www.electronjs.org/). It runs as its own window (no
browser needed) and saves each person's practice history to a local file —
no accounts, no passwords, no internet required to use it.

## Folder structure

```
tenfold-app/
├── main.js            Electron main process (window + file storage)
├── preload.js          Secure bridge between the app window and main.js
├── package.json
└── renderer/            The app's UI
    ├── index.html
    ├── app.js
    └── styles.css
```

User data is **not** stored inside this folder — it lives in Windows' (or
macOS'/Linux's) standard per-app data directory instead, since the files in
this folder get bundled into a read-only archive once the app is packaged.
On Windows that's:

```
%APPDATA%\Tenfold\data\
├── users.json          List of user names
└── users\
    ├── Alice.json        Alice's practice history, settings, imported text
    └── Bob.json          Bob's — completely separate from Alice's
```

(On macOS: `~/Library/Application Support/Tenfold/data/`. On Linux:
`~/.config/Tenfold/data/`.)

It's plain, human-readable JSON — easy to back up, copy to another
computer, or delete if you want to start fresh — tucked in the OS's
standard app-data location so it survives reinstalls and updates.

## Running it (development mode)

You'll need [Node.js](https://nodejs.org) installed (v18 or newer recommended).

```bash
git clone <this-repo>
cd tenfold-app
npm install      # downloads Electron — only needed once, requires internet
npm start        # launches the app
```

## First run / login

- **No users yet:** you'll be asked for a name. Type it and hit Continue —
  that creates your user file and takes you straight into the app.
- **Returning:** you'll see a list of existing names to pick from, or you
  can type a new name to add another user.
- **Switch user:** click "Switch user" in the top-right corner any time to
  go back to the login screen (useful on a shared computer).

There are no passwords — this is meant for trusted, personal or family use
on one machine, not for securing anything sensitive.

## Building a real installable app (.exe / .dmg / .AppImage)

```bash
npm run dist
```

This produces an installer in the `dist/` folder:
- **Windows:** an NSIS installer (`.exe`)
- **macOS:** a `.dmg`
- **Linux:** an `.AppImage`

You can only build for the OS you're currently building *on* unless you set
up cross-platform build tooling (Wine for Windows builds from macOS/Linux,
etc.).

## Features

- Session length by time or character count
- Lesson curriculum: 10 groups, ~80 lessons — key-position drills, hand-
  specific practice, progressive word lessons, top 25–1000 common words,
  phonetic alphabet, lorem ipsum, European country names, tongue twisters,
  sayings, written numbers, and more
- Import your own text (paste or file, up to 10,000 characters) with three
  playback modes — smart-quote/em-dash/ellipsis characters are
  auto-normalized to plain typeable ASCII on import
- Three error-handling modes: keep typing, must retype the correct key, or
  must backspace to fix
- Two error-counting modes: every bad keystroke, or one error per letter
- Speed and error-rate goals (dropdowns, in fixed increments) with
  per-lesson achievement tracking (green highlight + x/N progress per
  group) and a "suggest a lesson to improve" button that rotates through
  weak spots instead of grinding one
- Post-session chart: WPM line + error ticks on a timeline, interactive
  hover showing time/speed at any point
- Weekly practice-time tracker and a recent-sessions-vs-goal strip
- Multi-user, no passwords — local JSON files per user
- Pause with Esc

## Notes

- No passwords — meant for casual/family/shared-computer use, not for
  securing sensitive data.
- No runtime npm dependencies — the app itself is plain HTML/CSS/JS with
  zero external libraries; `electron` and `electron-builder` are
  dev-only (build-time) dependencies and are never bundled into the app.
