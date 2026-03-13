# Homepage

Personal portfolio site for Hilman Fikry, built with vanilla JavaScript Web
Components, Tailwind CSS, and Webpack. Deployed on GitHub Pages.

Live: <https://gofhilman.github.io/homepage/>

## Features

- Data-driven sections for hero, projects, skills, and contact info
- Typing animations in the header and hero intro
- Project carousel powered by Embla
- Responsive layout with smooth scrolling and a scroll progress bar
- Asset optimization pipeline with image minimization and WebP generation

## Tech Stack

- JavaScript (Web Components)
- Tailwind CSS + PostCSS
- Webpack (dev server, production build, asset handling)
- Embla Carousel

## Project Structure

- `src/index.js` entry point and component registrations
- `src/template.html` base HTML shell
- `src/styles.css` Tailwind layer styles and component classes
- `src/components/` custom elements for each section
- `src/data/` content sources for the UI
- `src/assets/` images and icons
- `webpack.common.js`, `webpack.dev.js`, `webpack.prod.js` build config
- `dist/` production output

## Getting Started

Install dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm start
```

Build for production:

```bash
npm run build
```

## Content Updates

Edit the data files to change site content:

- `src/data/hero-data.js`
- `src/data/projects-data.js`
- `src/data/skills-data.js`
- `src/data/contact-data.js`
- `src/data/site-data.js`

## Deployment

This site is deployed to GitHub Pages from the `dist` folder using a subtree.
Run a production build, then push:

```bash
npm run build
npm run deploy
```

## Scripts

- `npm start` run the dev server with live reload
- `npm run build` create a production build in `dist`
- `npm run deploy` push `dist` to the `gh-pages` branch
- `npm run format` format code with Prettier
