# tona

<p align="center">
  <img src="../../assets/tona.png" alt="Tona" width="100" />
</p>

<p align="center">
  A modern theme development framework for CNBlogs (博客园).
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tona"><img src="https://img.shields.io/npm/v/tona?style=flat-square" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/tona?style=flat-square" alt="license"></a>
  <a href="https://www.cnblogs.com"><img src="https://img.shields.io/badge/CNBlogs-博客园-green?style=flat-square" alt="CNBlogs"></a>
</p>

**English** | [中文](./README.zh-CN.md)

## Features

- **Plugin System** - Extensible plugin architecture for building modular themes
- **Configuration API** - Type-safe configuration management with `defineOptions`
- **Theme Context** - Shared theme state and utilities via `createTheme`
- **TypeScript Support** - Full TypeScript definitions included
- **Lightweight** - Minimal runtime overhead

## Installation

```bash
npm install tona
```

```bash
pnpm add tona
```

```bash
yarn add tona
```

## Usage

### Creating a Theme

```typescript
import { createTheme } from 'tona'

const theme = createTheme()

// Use plugins
theme.use(myPlugin)
```

### Defining Options

```typescript
import { defineOptions } from 'tona'

const getBackgroundOptions = defineOptions('bodyBackground', {
  enable: false,
  value: '',
  opacity: 0.85,
  repeat: false,
})

// Use in your theme
const options = getBackgroundOptions(userConfig)
```

### Creating a Plugin

```typescript
import { defineOptions } from 'tona'

export function backgroundPlugin(theme, devOptions, pluginOptions) {
  const getBackgroundOptions = defineOptions('bodyBackground', {
    enable: false,
    value: '',
    opacity: 0.85,
    repeat: false,
  })

  const { enable, value, opacity, repeat } = getBackgroundOptions(devOptions)

  if (!enable) return

  const { opacitySelector } = Object.assign(
    {},
    { opacitySelector: '#main,#navigator' },
    pluginOptions,
  )

  setBackground(value, repeat)
  setOpacity(opacity, opacitySelector)
}
```

### Using Plugins

```typescript
import { createTheme } from 'tona'
import { backgroundPlugin } from './plugin'

const theme = createTheme()

theme.use(
  backgroundPlugin,
  {
    // Theme default configuration
    enable: true,
    value: '#ffb3cc',
    opacity: 0.85,
  },
  {
    // Plugin configuration
    opacitySelector: '#main',
  },
)
```

## API Reference

### `createTheme()`

Creates a new theme instance with context management.

**Returns:** `ThemeInstance`

### `defineOptions(key, defaults)`

Creates a type-safe configuration getter.

**Parameters:**

- `key` - Configuration key or array of keys (for aliases)
- `defaults` - Default configuration object

**Returns:** `(options: any) => Config`

## Related Packages

- [tona-plugins](https://github.com/guangzan/tona/tree/main/packages/plugins) - Official plugin collection
- [tona-hooks](https://github.com/guangzan/tona/tree/main/packages/hooks) - React hooks for theme development
- [tona-utils](https://github.com/guangzan/tona/tree/main/packages/utils) - Utility functions
- [tona-vite](https://github.com/guangzan/tona/tree/main/packages/tona-vite) - Vite plugin for theme development

## Documentation

For detailed documentation and examples, visit the [Tona documentation](https://github.com/guangzan/tona).
