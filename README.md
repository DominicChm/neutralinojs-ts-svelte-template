# neutralinojs-ts-svelte-template
A bare-bones template to use [Neutralino.js](https://github.com/neutralinojs/neutralinojs) with [Svelte](https://svelte.dev/), [Typescript](https://www.typescriptlang.org/), and [Vite](https://vitejs.dev/).

## Quick Start
To get started, run 
```
git clone git@github.com:DominicChm/neutralinojs-ts-svelte-template
cd neutralinojs-ts-svelte-template
npm install
npm run dev
```
Make sure to edit `neutralino.config.json` to suit your project! (*Especially* the `CHANGEME` fields!)

## Packaging
To package your app, simply run
```
npm run build
```
Executables should now be in the `dist` directory.
## Editing
Generally, static files go in `/public` and source files (svelte or ts) go in `/src`. Other than that, it's up to you!
