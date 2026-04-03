# Portfolio

Thomas Derderian's personal portfolio built with Vue.js 3 and Vite.

**Live site:** https://thomasderderian.github.io/portfolio/

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint

```sh
npm run lint
```

## Deployment (GitHub Pages)

The site is automatically deployed to GitHub Pages via the [`.github/workflows/static.yml`](.github/workflows/static.yml) workflow whenever changes are pushed to `main`.

### How it works

1. The workflow installs dependencies, runs `npm run build`, and publishes the `dist/` folder to GitHub Pages.
2. Vite is configured with `base: '/portfolio/'` (in `vite.config.js`) so all assets load correctly from the project sub-path.
3. Vue Router uses **hash mode** (`createWebHashHistory`) so that page refreshes and direct links like `/#/about` work on GitHub Pages without any server-side URL rewriting.

### GitHub Pages settings

In the repository **Settings → Pages**, set the source to **GitHub Actions** (not a branch) so the workflow controls what gets published.

### Base path note

If you ever rename this repository, update `base` in `vite.config.js` to match the new repository name (e.g. `base: '/new-repo-name/'`).

