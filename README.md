# Vanilla JavaScript Sneak-porfolio

This is a repository bootstraped as a modern vanilla JavaScript ready to distribute as a production app. 🏄

## Features

- [Webpack](https://webpack.js.org/) (v5)
- [Babel](https://babeljs.io/) with [preset-env](https://babeljs.io/docs/en/babel-preset-env)
- [Prettier](https://prettier.io/)
- [Tasks Runner VsCode](https://code.visualstudio.com/docs/editor/tasks)
- [ESLint](https://eslint.org/) with:
  - [Simple Import Sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
  - [Import plugin](https://github.com/benmosher/eslint-plugin-import/)
  - [HTML plugin](https://github.com/BenoitZugmeyer/eslint-plugin-html)
  - And a few other ES2015+ related rules

## Running the app

```
# install all dependencies
npm install

# run in dev mode on port 8080
npm run dev

# generate production build
npm run build

# run generated content in dist folder on port 8080
npm run start
```

## Automated Task

Please open the project in VsCode, next you must run `Ctrl + Shift + P` then select `Run Task` and select:

```
# install all dependencies
npm: dev

# install all dependencies
npm: install

# run generated content in dist folder on port 8080
npm: start

# generate production build
npm: build

```

and that's all you need, choose whatever you preefer...
