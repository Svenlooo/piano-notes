# Piano Notes

A web-app for learning to read piano notes from a sheet.
Uses Vue 3 and Nuxt 3.

## Features

This app showcases the following features within a Nuxt 3 app:
- Server-side and client-side rendering
- Pinia store
- Persistence of the store in localstorage
- Progressive Web App caching via Service Worker
- Routing
- Variable themes (light + dark mode)
- e2e tests via Cypress

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
yarn dev
```

## Production

Build the application for production:

```bash
npm run build
yarn build
```

Locally preview production build:

```bash
npm run preview
yarn preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Tests

Open the Cypress interactive GUI:

```bash
yarn cypress open
```

Run tests from the CLI:

```bash
yarn cypress run
```

## Deployment & Play

Deployment is done automagically via Netlify.
View the latest version here: https://piano-notes.netlify.app/

## Resources

Here is a list of external resources used for this project, with a big thanks to the creators.

- Icons: https://nuxt.com/modules/icon
- Pinia localstorage: https://github.com/prazdevs/pinia-plugin-persistedstate
- Charts: https://apexcharts.com/ & https://www.npmjs.com/package/vue3-apexcharts
