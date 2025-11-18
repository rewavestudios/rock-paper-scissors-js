## Rock Paper Scissors (vanilla JS)

Simple browser-based Rock Paper Scissors game implemented with a single HTML file and a small JavaScript module.

### Features

- Play Rock/Paper/Scissors vs a random computer move
- Score is persisted in `localStorage` (wins, losses, ties)
- Reset button clears the stored score

### Requirements

- Modern web browser (Chrome, Firefox, Edge, Safari)

### Quick Start

1. Open `rock-paper-scissors-project.html` in your browser (double-click or use `File -> Open`).
2. Click a move button (`Rock`, `Paper`, `Scissors`) and an alert will show the round result and running totals.
3. Click `Reset Score` to clear the stored counts.

Alternatively, serve the folder with a static server (optional):

```bash
# from project root
python3 -m http.server 8000
# then open http://localhost:8000/rock-paper-scissors-project.html
```

### Testing / Verification

- Play a few rounds and verify the alert shows correct outcomes.
- Reload the page and confirm score persists.
- Click `Reset Score` and confirm counts return to zero and `localStorage` is cleared.

### Changes made (by maintainer/assistant)

- Added explanatory comments to `rock-paper-scissors-project.html` and `js/app.js` above major sections.
- Simplified and optimized result logic in `js/app.js` to avoid deeply nested branches.
- Moved score persistence to update immediately after each round (`localStorage.setItem` now runs after score changes).
- Added a `resetScore()` helper and updated the Reset button to call it.

### Project Structure

- `rock-paper-scissors-project.html` — main page and UI
- `js/app.js` — game logic, score handling, persistence

## Optional Enhancements

- Replace `alert()` dialogs with in-page UI elements so results and scores are visible without blocking (improves UX and makes automated testing easier).
- Display the running score directly on the page (DOM) and update it after each round.
- Add CSS to prettify the UI, make buttons larger on touch devices, and improve responsive layout for mobile screens.
- Add keyboard shortcuts for moves (e.g., R/P/S) and focus styles for accessibility.
- Add simple animations/transitions for round results and button feedback.
- Track additional stats: total rounds, longest win/lose streak, and win percentage.
- Add unit tests for pure logic (e.g., `determineOutcome(player, computer)`) and a lightweight test runner (Jest, Mocha, or a simple Node script).
- Add CI (GitHub Actions) to run tests and optionally linting on push/pull requests.
- Improve accessibility: ARIA labels, better color contrast, and screen-reader friendly alerts (or live regions instead of `alert`).
- Add a fallback for environments with `localStorage` disabled and clearly document behavior.
- Allow configurable game modes (best-of N rounds) and persist the chosen mode.
- Offer an optional AI/computer strategy mode that biases choices based on simple heuristics or player history.

## Contributing

Contributions welcome — open an issue or pull request. Keep changes small and focused.

## License

See the [LICENSE](LICENSE) file for details.

