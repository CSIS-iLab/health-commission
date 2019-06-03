const argv = require('yargs').argv
const config = require('./frasco.config.js')
const { src, dest, watch, series, parallel } = require('gulp')
const autoprefixer = require('autoprefixer')
const browserSync = require('browser-sync')
const cp = require('child_process')
const eslint = require('gulp-eslint')
const postcss = require('gulp-postcss')
const sass = require('gulp-sass')
const log = require('fancy-log')

const server = browserSync.create()
const jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

const runEslint = function() {
  return src([
    config.assets + '/' + config.js.src + '/**/*.js',
    '!node_modules/**'
  ])
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failOnError())
}
exports.eslint = runEslint

function sassTask() {
  return src(config.assets + '/' + config.sass.src + '/**/*.scss')
    .pipe(
      sass({ outputStyle: config.sass.outputStyle }).on('error', sass.logError)
    )
    .pipe(postcss([autoprefixer(config.sass.autoprefixer)]))
    .pipe(dest(config.assets + '/' + config.sass.dest))
    .pipe(server.stream({ match: '**/*.css' }))
    .on('end', () => log('SASS updated'))
}

/*----------  Browsersync  ----------*/

let browser =
  config.browsersync.browsers[0] != null
    ? config.browsersync.browsers
    : 'default'

function reload(done) {
  server.reload()
  done()
}

function serve(done) {
  server.init({
    port: config.port,
    browser: browser,
    server: {
      baseDir: config.jekyll.dest
    }
  })
  done()
}

/*----------  Watch  ----------*/

const filesToWatch = [
  '!./node_modules/**/*',
  '!./README.md',
  '!' + config.jekyll.dest + '/**/*',
  '_config*.yml',
  '*.html',
  './**/*.md',
  './**/*.markdown',
  '*.json',
  config.jekyll.includes + '/**/*',
  config.jekyll.layouts + '/**/*',
  config.jekyll.posts + '/**/*',
  config.assets + '/' + config.sass.dest + '/**/*',
  config.assets + '/' + config.js.dest + '/**/*',
  config.assets + '/' + config.imagemin.dest + '/**/*'
]

function watchTask() {
  watch(
    config.assets + '/' + config.sass.src + '/**/*',
    series(sassTask, jekyllBuild, reload)
  )

  if (config.tasks.browsersync) {
    watch(filesToWatch, series(jekyllBuild, reload))
  }
}

/*----------  Jekyll  ----------*/

function jekyllBuild(done) {
  let jekyllConfig = config.jekyll.config.default
  if (argv.jekyllEnv == 'production') {
    process.env.JEKYLL_ENV = 'production'
    jekyllConfig += config.jekyll.config.production
      ? ',' + config.jekyll.config.production
      : ''
  } else {
    jekyllConfig += config.jekyll.config.development
      ? ',' + config.jekyll.config.development
      : ''
  }

  let buildArgs = ['build', '--config', jekyllConfig]

  if (argv.preview) {
    buildArgs.push('--drafts')
    buildArgs.push('--unpublished')
    buildArgs.push('--future')
  }

  if (argv.forestry) {
    buildArgs.push('--destination')
    buildArgs.push('_forestry_site')
  }

  console.log(buildArgs)

  return cp
    .spawn(jekyll, buildArgs, { stdio: 'inherit', env: process.env })
    .on('close', done)
}

exports.default = series(sassTask, jekyllBuild, serve, watchTask)

exports.build = series(parallel(sassTask), jekyllBuild)
