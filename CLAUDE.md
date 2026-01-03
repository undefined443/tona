# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Tona is a theme development framework for CNBlogs (博客园), providing a complete toolchain and rich plugin ecosystem for creating beautiful, feature-rich blog themes. This is a pnpm monorepo using workspace structure.

## Architecture

### Monorepo Structure

This is a pnpm workspace with three main areas:

- `packages/*` - Core framework packages and utilities
- `themes/*` - Theme implementations (shadcn, geek, reacg)
- `docs/` - Documentation site

Key packages:
- `tona-vite` - Vite plugin that injects base templates and serves shared resources
- `core` - Core framework utilities and APIs
- `hooks` - React/Preact hooks for DOM queries and theme logic
- `options` - Configuration and options management
- `plugins` - Shared plugin implementations
- `ui` - Reusable UI components
- `utils` - Utility functions

### Template System

The base HTML templates and default styles are located in `packages/tona-vite/public/`:
- `/templates/*.html` - Base page templates for different CNBlogs pages
- `/css/*` - Default styles
- `/public/*` - Shared assets

**IMPORTANT**: Files in `packages/tona-vite/public` MUST NOT be modified. All customizations should be done in theme implementations.

### Theme Development

Themes are located in `themes/*`. Each theme:
- Uses the `tona-vite` plugin which automatically injects base templates
- Builds as IIFE bundle (`{themeName}.min.js`)
- Can implement features via Preact components or DOM manipulation plugins
- Must support responsive design and dark/light modes

The dev server shows a navigation index at `/`. Actual pages are at:
- `/templates/home.html` - Home page
- `/templates/post-markdown.html` - Markdown post
- `/templates/post-tinymce5.html` - TinyMCE 5 post
- `/templates/post-tinymce.html` - TinyMCE post
- `/templates/photos.html` - Photo gallery
- `/templates/catalog.html` - Post list
- `/templates/category.html` - Category page
- `/templates/tags.html` - Tags page

## Common Commands

### Development

```bash
# Start dev server (interactive theme selection)
pnpm dev

# Start specific theme
pnpm dev shadcn
# or
pnpm dev --theme shadcn

# Build specific theme
pnpm build

# Build all packages
pnpm build:pkg
```

### Testing

```bash
# Run tests
pnpm test

# Type checking
pnpm typecheck
```

### Code Quality

```bash
# Lint and format with Biome
pnpm lint
```

### Package Development

```bash
# Develop a specific package (e.g., core)
cd packages/core
pnpm dev        # Watch mode with tsdown
pnpm build      # Build package
pnpm test       # Run package tests
```

### Release

```bash
# Bump versions across all packages
pnpm release
```

## Theme-Specific Guidelines

### themes/shadcn

This theme uses shadcn UI design style with Tailwind CSS v4:

- **Component-first approach**: Prefer Preact components over plugins
- **Styling**: Use only Tailwind classes, no raw CSS properties
- Use `class-variance-authority` (cva) for style variants
- Use `cn()` utility for class merging
- Dark mode via `dark:` prefix
- Animations via `tw-animate-css` presets
- Icons: use `lucide-preact` for components, `lucide` for DOM operations

Component structure:
```
component-name/
├── hooks.ts       # React hooks logic
├── dom-hooks.ts   # useQueryDOM hooks
├── utils.ts       # Utility functions
├── types.ts       # TypeScript types
└── index.tsx      # Main component
```

### themes/geek

This theme uses plugin-based implementation approach.

## Development Workflow

1. Before implementing features, check `packages/tona-vite/public/templates` and `/css` to understand base structure
2. The `tona-vite` plugin automatically injects the base templates during development
3. All themes share the same base templates but can customize via CSS and JavaScript
4. Use workspace packages (like `tona-utils`, `tona-hooks`) for shared functionality

## TypeScript Configuration

- Target: ESNext with bundler module resolution
- Strict mode enabled with null checks
- JSX preserved (handled by Preact preset)
- Path aliases configured via baseUrl

## Build System

- **Package builds**: Uses `tsdown` for library packaging
- **Theme builds**: Uses Vite with IIFE format
- **Testing**: Vitest with happy-dom environment
- **Formatting**: Biome (configured with line width 80, single quotes, semicolons optional)

## Git Hooks

Lefthook runs Biome checks on pre-commit for staged files.

## Icon Usage

- **DOM operations**: Import from `lucide`, use `createElement(Icon)`
- **Preact components**: Import from `lucide-preact`, use as `<Icon />`
- Always use `stroke-width={1}` and Tailwind size classes (`size-4`, `size-5`)
