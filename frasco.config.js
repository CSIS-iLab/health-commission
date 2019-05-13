module.exports = {
  port: 4000,

  tasks: {
    browsersync: true,
    eslint: true,
    imagemin: true,
    sass: true,
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
  externals: {},
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
    posts: '_posts',
    series: '_series',
    themes: '_themes',
    events: '_events',
    authors: '_authors',
    plugins: '_plugins'
  },

  js: {
    src: '_js',
    dest: 'js',
    entry: [
      'bundle.js',
      'archives.js',
      'members.js',
      'custom-viz/disorder-outbreak.js'
    ]
  },

  sass: {
    src: '_sass',
    dest: 'css',
    outputStyle: 'compressed',
    autoprefixer: {
      grid: true,
      browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']
    }
  },

  webpack: {
    mode: 'production',
    module: {
      rules: []
    },
    output: {
      filename: chunkData => {
        return chunkData.chunk.entryModule._identifier.includes('custom-viz/')
          ? 'custom-viz/[name].js'
          : '[name].js'
      }
    }
  }
}
