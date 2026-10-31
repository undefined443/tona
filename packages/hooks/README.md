# tona-hooks

<p align="center">
  <img src="../../assets/tona.png" alt="Tona" width="100" />
</p>

<p align="center">
  React hooks collection for CNBlogs theme development.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tona-hooks"><img src="https://img.shields.io/npm/v/tona-hooks?style=flat-square" alt="npm version"></a>
  <a href="LICENSE"><img src="https://img.shields.io/npm/l/tona-hooks?style=flat-square" alt="license"></a>
  <a href="https://preactjs.com"><img src="https://img.shields.io/badge/Preact->=10.0.0-673AB8?style=flat-square&logo=preact" alt="Preact"></a>
</p>

**English** | [中文](./README.zh-CN.md)

## Features

- **Preact Compatible** - Built for Preact, works with React
- **CNBlogs Optimized** - Hooks designed specifically for CNBlogs environment
- **TypeScript Support** - Full type definitions included
- **Lightweight** - Tree-shakeable and minimal footprint

## Installation

```bash
npm install tona-hooks
```

```bash
pnpm add tona-hooks
```

```bash
yarn add tona-hooks
```

## Usage

```typescript
import { useQueryDOM, useLocalStorage, useScroll } from 'tona-hooks'
```

## Available Hooks

### `useAjaxComplete`

Listen for AJAX requests completion.

```typescript
import { useAjaxComplete } from 'tona-hooks'

useAjaxComplete((event, xhr, settings) => {
  console.log('AJAX completed:', settings.url)
})
```

### `useEffectOnce`

Run effect only once on mount.

```typescript
import { useEffectOnce } from 'tona-hooks'

useEffectOnce(() => {
  console.log('Component mounted')
})
```

### `useEventCallback`

Create a stable callback reference.

```typescript
import { useEventCallback } from 'tona-hooks'

const handleClick = useEventCallback(() => {
  console.log('Clicked!')
})
```

### `useIsomorphicLayoutEffect`

Safe layout effect for SSR and browser.

```typescript
import { useIsomorphicLayoutEffect } from 'tona-hooks'

useIsomorphicLayoutEffect(() => {
  // DOM measurements
}, [])
```

### `useLocalStorage`

Persist state to localStorage.

```typescript
import { useLocalStorage } from 'tona-hooks'

const [value, setValue] = useLocalStorage('key', 'defaultValue')
```

### `useQueryDOM`

Query and observe DOM elements.

```typescript
import { useQueryDOM } from 'tona-hooks'

const element = useQueryDOM('#my-element')
```

### `useRafState`

State updates synced with requestAnimationFrame.

```typescript
import { useRafState } from 'tona-hooks'

const [position, setPosition] = useRafState({ x: 0, y: 0 })
```

### `useScroll`

Track scroll position of an element.

```typescript
import { useScroll } from 'tona-hooks'

const [x, y] = useScroll(ref)
```

### `useUnmount`

Run cleanup on component unmount.

```typescript
import { useUnmount } from 'tona-hooks'

useUnmount(() => {
  console.log('Component unmounted')
})
```

### `useWindowScroll`

Track window scroll position.

```typescript
import { useWindowScroll } from 'tona-hooks'

const [x, y] = useWindowScroll()
```

## Peer Dependencies

```json
{
  "preact": ">=10.0.0"
}
```

## Related

- [tona](https://github.com/guangzan/tona/tree/main/packages/core) - Core framework
- [tona-ui](https://github.com/guangzan/tona/tree/main/packages/ui) - UI components
