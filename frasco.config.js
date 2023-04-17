const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin

module.exports = {
  port: 4000,

  tasks: {
    browsersync: true,
    eslint: true,
    imagemin: true,
    sass: true,
    styleLint: true,
    watch: true,
    webpack: true
  },

  assets: './assets',

  browsersync: {
    browsers: [
      // "Google Chrome Canary",
      // "Google Chrome",
      // "Firefox Nightly",
      // "Firefox Developer Edition",
      // "Firefox",
      // "Safari Technology Preview",
      // "Safari",
      // "Opera",
      // "Opera Developer",
    ]
  },

  eslintLoader: {
    enforce: 'pre',
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'eslint-loader'
  },

  imagemin: {
    src: '_images',
    dest: 'images',
    progressive: true,
    svgoPlugins: [{ removeViewBox: false }]
  },

  jekyll: {
    config: {
      default: '_config.yml',
      development: '_config_development.yml',
      production: ''
    },
    dest: '_site',
    data: '_data',
    includes: '_includes',
    layouts: '_layouts',
    posts: '_posts'
  },

  js: {
    src: '_js',
    dest: 'js',
    entry: [
      'bundle.js',
      'spotlights.js',
      'archives.js',
      'home.js',
      'lazy-load.js',
      'newsletter.js',
      'spotlights/arctic/arctic.js',
      'spotlights/scs/scs.js'
    ]
  },

  sass: {
    src: '_sass',
    dest: 'css',
    outputStyle: 'compressed',
    autoprefixer: {
      grid: 'autoplace'
    }
  },

  webpack: {
    mode: 'production',
    // devtool: 'source-map',
    // plugins: [new BundleAnalyzerPlugin()],
    output: {
      filename: chunkData => {
        return chunkData.chunk.entryModule._identifier.includes('spotlights/')
          ? 'spotlights/[name].js'
          : '[name].js'
      }
    },
    externals: {
      algoliasearch: 'algoliasearch',
      Flickity: 'flickity',
      LuminousLightbox: 'luminous-lightbox',
      'instantsearch.js/es': 'instantsearch',
      'pixi.js': 'PIXI',
      Plyr: 'plyr',
      objectFitImages: 'object-fit-images',
      objectFitVideos: 'object-fit-videos',
      ScrollMagic: 'ScrollMagic',
      SmoothScroll: 'smooth-scroll',
      Stickyfill: 'stickyfilljs',
      TimelineMax: 'TimelineMax',
      'tippy.js': 'tippy',
      TweenLite: 'TweenLite',
      TweenMax: 'TweenMax',
      Highcharts: 'Highcharts'
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
      ]
    },
    resolve: {
      modules: ['node_modules'],
      alias: {
        TweenLite: 'gsap/src/minified/TweenLite.min.js',
        TweenMax: 'gsap/src/minified/TweenMax.min.js',
        TimelineLite: 'gsap/src/minified/TimelineLite.min.js',
        TimelineMax: 'gsap/src/minified/TimelineMax.min.js',
        ScrollMagic: 'scrollmagic/scrollmagic/minified/ScrollMagic.min.js',
        'animation.gsap':
          'scrollmagic/scrollmagic/minified/plugins/animation.gsap.min.js'
      }
    }
  }
}
