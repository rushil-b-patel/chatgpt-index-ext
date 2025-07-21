## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/rushil-b-patel/chatgpt-index-ext
```
2. Get into the Project folder:

```bash
cd chatgpt-index-ext
```

3. Install dependencies:

```bash
npm install
```

4. Build the extension for production:

```bash
npm run build
```

5. Open Chrome and navigate to `chrome://extensions/`, enable "Developer mode", and load the unpacked extension from the `dist` directory.

## Project Structure

- `src/popup/` - Extension popup UI
- `src/content/` - Content scripts
- `manifest.config.js` - Chrome extension manifest configuration

## Chrome Extension Development Notes

- Use `manifest.config.js` to configure your extension
- Content scripts should be placed in `src/content/`
- Popup UI should be placed in `src/popup/`
