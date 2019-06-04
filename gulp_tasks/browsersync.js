const argv = require('yargs').argv
const browsersync = require('browser-sync').create()
const config = require('../frasco.config.js')
const cp = require('child_process')
const gulp = require('gulp')

let browser =
  config.browsersync.browsers[0] != null
    ? config.browsersync.browsers
    : 'default'

/**
 * Wait for jekyll-build, then launch the Server
 */

const browserSyncInit = function() {
  return browsersync.init({
    port: config.port,
    browser: browser,
    server: {
      baseDir: config.jekyll.dest
    }
  })
}

// gulp.task('browsersync', gulp.series('jekyll-build'), browserSyncInit)

/**
 * Rebuild Jekyll & do page reload
 */

const browserSyncReload = function() {
  browsersync.notify('Rebuilded Jekyll')
  browsersync.reload()
}

gulp.task('browser-reload', gulp.series('jekyll-build'), browserSyncReload)

exports.browsersync = gulp.series(jekyllBuild, browserSyncInit)
