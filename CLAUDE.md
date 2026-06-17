# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

"DEVILS™" — a deliberately, maximally **ugly** single-page parody website satirizing traffic-arbitrage / scam sites. The bad UX is the product: dodging buttons, alert spam, autoplaying Web Audio, self-replicating popups, a wandering chat blob, fake countdowns, hijacked scroll/right-click/copy, etc. When changing things, preserve the intentional awfulness — "annoying" and "broken-feeling" are features, not bugs to fix.

## Commands

```bash
npm run dev      # Vite dev server with HMR
npm run build    # Production build → dist/
npm run preview  # Serve the built dist/ locally
```

There are no tests, linters, or formatters configured.

## Architecture

Three source files at the repo root, with `index.html` as the Vite entry point:

- `index.html` — all markup/sections (hero, about, services, stats, testimonials, contact, footer) plus the floating chrome (cookie banner, mascot, newsletter modal, mystery nav).
- `script.js` — loaded as `<script type="module">`. ~21 self-contained IIFEs/functions, each numbered and commented, that drive a single annoyance (visitor counter, title animation, audio engine, popup hydra, money confetti, etc.). They share almost no state; add a new gag as another numbered block.
- `styles.css` — plain CSS, no framework.

### Critical gotcha: ES module + inline handlers

`script.js` is an ES module, so its top-level functions are **module-scoped, not global**. The HTML uses inline `on*` attributes (e.g. `onclick="spamAlerts()"`) which resolve against `window`. The bottom of `script.js` (`Object.assign(window, {...})`) re-exports those handlers to `window`. **Any new function referenced from an inline HTML handler must be added to that `Object.assign` block**, or it will silently fail with "not defined".
