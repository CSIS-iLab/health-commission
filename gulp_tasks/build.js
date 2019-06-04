const argv = require('yargs').argv
const browsersync = require('browser-sync').create()
const config = require('../frasco.config.js')
const cp = require('child_process')
const gulp = require('gulp')

let jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll'

const build = Object.keys(config.tasks).filter(
  key => config.tasks[key] && !['browsersync', 'watch'].includes(key)
)
// build.push('jekyll-build')
build.push(jekyllBuild)

console.log(build)

/**
 * Build the Jekyll Site
 */
// gulp.task('jekyll-build', function(done) {
//   let jekyllConfig = config.jekyll.config.default
//   if (argv.jekyllEnv == 'production') {
//     process.env.JEKYLL_ENV = 'production'
//     jekyllConfig += config.jekyll.config.production
//       ? ',' + config.jekyll.config.production
//       : ''
//   } else {
//     jekyllConfig += config.jekyll.config.development
//       ? ',' + config.jekyll.config.development
//       : ''
//   }

//   let buildArgs = ['build', '--config', jekyllConfig]

//   if (argv.preview) {
//     buildArgs.push('--drafts')
//     buildArgs.push('--unpublished')
//     buildArgs.push('--future')
//   }

//   if (argv.forestry) {
//     buildArgs.push('--destination')
//     buildArgs.push('_forestry_site')
//   }

//   return cp
//     .spawn(jekyll, buildArgs, { stdio: 'inherit', env: process.env })
//     .on('close', done)
// })

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

  return cp
    .spawn(jekyll, buildArgs, { stdio: 'inherit', env: process.env })
    .on('close', done)
}

exports.jekyllBuild = jekyllBuild

/**
 * Build task, this will minify the images, compile the sass,
 * bundle the js, but not launch BrowserSync and watch files.
 */
// gulp.task('build', gulp.series(build))

/**
 * Test task, this use the build task.
 */
// gulp.task('test', build)
