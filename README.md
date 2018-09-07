# CSIS Jekyll Starter Kit
This is a Jekyll starter kit based on [Frasco](https://github.com/ixkaito/frasco/) that utilizes gulp, Sass, Autoprefixer, PostCSS, Webpack, imagemin, and Browsersync to speed-up development.

## Table of Contents
* [Quick-Start Instructions](#quick-start-instructions)
* [Usage](#usage)
  * [Local Development](#local-development)
  * [Build for Production](#build-for-production)
  * [See More Commands](#see-more-commands)
  * [Jekyll](#jekyll)
* [What's Included](#whats-included)

## Quick-start Instructions
```shell
$ git clone https://github.com/CSIS-iLab/csis-jekyll-starter.git
$ cd csis-jekyll-starter
$ npm install
$ npm start
```

## Usage

### Local Development

This will give you file watching, browser synchronisation, auto-rebuild, CSS injecting, etc.

```shell
$ npm start
```

### Build for Production

This will set the `JEKYLL_ENV` to `production` and use the production config file(s) set in `frasco.config.js` to override default settings.

```shell
$ npm run build
```

### See More Commands

This will display all available commands, such as running eslint or imagemin independently.

```shell
$ npm run
```

### Jekyll

You can also use any of the default Jekyll commands listed in their [docs](https://jekyllrb.com/docs/usage/).

## What's Included
For more information on what is included and modifying the default configuration, see the [What's Included guide](DEVELOPMENT.md).

- [gulp](https://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](http://postcss.org/)
- [Webpack](https://webpack.github.io/)
- [UglifyJS](https://github.com/mishoo/UglifyJS2)
- [imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)

## Copyright / License

Copyright © 2018 CSIS iDeas Lab under the [MIT License](https://github.com/ixkaito/frasco/blob/master/LICENSE).
