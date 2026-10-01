# Changelog

## 1.5.0
- Added: "🎯 Suggest a lesson to improve" button that rotates through
  under-goal/untried lessons instead of grinding one.
- Added: "Your text" lesson group — import your own text (paste or file,
  up to 10,000 characters) with three playback modes (from the beginning,
  random start point, shuffled words). Imported text is automatically
  sanitized of smart quotes/em-dashes/ellipsis/non-breaking spaces so
  every character is actually typeable on a physical keyboard.

## 1.4.0
- Added: per-lesson goal-achievement tracking — lessons you've cleared
  under your current goal are highlighted green with a checkmark, and
  each lesson group shows "x/N achieved". Raising the goal re-evaluates
  everything against the new target.
- Changed: speed/error-rate goals are dropdowns (WPM in steps of 5, error
  rate in steps of 2) instead of free-typed numbers.
- Improved: error rate/accuracy tracked and displayed to 0.1% precision.

## 1.3.0
- Replaced the flat content-category row with a full lesson curriculum:
  10 groups (First steps, Warm-up, Learn, Word exercises, Finger
  practice, Hand practice, Practical exercises, Bonus, Freeform, Your
  text) covering roughly 80 individual lessons.

## 1.2.0
- Added accuracy/error-rate display toggle.
- Added error-counting mode toggle (every bad key vs. one per letter).
- Post-session chart now marks error moments as timeline ticks and is
  interactive (hover shows time + speed).
- Added settable speed/error-rate goals with a met/missed badge and a
  recent-sessions-vs-goal strip.

## 1.1.0
- Fixed word-wrap splitting mid-letter across lines.
- Added a "Restart" button that retries the exact same passage.
- Added a shake-on-error toggle.
- Settings now persist per user.

## 1.0.1
- Fixed a startup crash caused by trying to write the data folder inside
  the read-only `app.asar` archive; data now lives in the OS's standard
  per-app data directory.
- Fixed duplicate app instances on repeated launch (single-instance lock).

## 1.0.0
- Initial release: standalone Electron app with local multi-user login
  (no passwords), per-user practice history, weekly practice-time
  tracker, and post-session performance chart.
