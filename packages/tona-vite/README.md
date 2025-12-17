# vite-plugin-tona

Vite plugin for Tona themes - combines dynamic script extension and shared assets serving.

## Installation

```bash
npm install tona-vite
```

## Usage

```ts
import tona from 'tona-vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    tona()
  ]
})
```

## Features

- Automatically detects `main.ts` or `main.js` files and replaces script src in HTML
- Configures Vite build as IIFE library format for theme distribution
- Serves shared assets from public directory during development
- Supports multiple asset paths: `/public/`, `/templates/`, `/js/`, `/css/`, `/images/`
- Automatically sets correct MIME types for served files
- Works in both development and build modes

## Options

```ts
interface TonaPluginOptions {
  /**
   * Theme name for build output filename
   * @default 'theme'
   */
  themeName?: string
}
```

## Build Configuration

The plugin automatically configures Vite's build mode:

- **Library format**: IIFE (Immediately Invoked Function Expression)
- **Entry point**: Automatically detects `src/main.ts` or `src/main.js`
- **Output filename**: `{themeName}.min.js` (default: `theme.min.js`)
- **CSS code splitting**: Disabled (all styles bundled together)

## Development Server

During development, the plugin serves static assets from the plugin's public directory:

- `/public/*` - General public assets
- `/templates/*` - HTML templates
- `/js/*` - JavaScript files
- `/css/*` - CSS files
- `/images/*` - Image files
- `/` or `/index.html` - Navigation index page
