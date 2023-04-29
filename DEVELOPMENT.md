# What's Included
The below tools are included in the [Frasco](https://github.com/ixkaito/frasco/) starter kit. Read below for information on modifying the configurations set in `fasco.config.js`. Changes to the configruation should not be made without discussing with the lead developer on the project.

- [gulp](https://gulpjs.com/)
- [Sass](http://sass-lang.com/)
- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](http://postcss.org/)
- [Webpack](https://webpack.github.io/)
- [UglifyJS](https://github.com/mishoo/UglifyJS2)
- [imagemin](https://github.com/imagemin/imagemin)
- [Browsersync](https://www.browsersync.io/)

## Configurations and Defaults

You can change the configurations by editing `frasco.config.js`.

- ### port

    default: `4000`  
    options: integer

- ### tasks

    Tasks to run when you exec `npm start` or `gulp` commands.

    - #### browsersync

        To compile sources via Jekyll and to keep browsers in sync with file changes via Browsersync.

        default: `true`  
        options: boolean (`true` / `false`)

    - #### eslint

        To lint utility for JavaScript and JSX

        default: `true`  
        options: boolean (`true` / `false`)

    - #### imagemin

        To minify images.

        default: `true`  
        options: boolean (`true` / `false`)

    - #### sass

        To compile Sass.

        default: `true`  
        options: boolean (`true` / `false`)

    - #### watch

        To watch file changes and re-compile sources.

        default: `true`  
        options: boolean (`true` / `false`)

    - #### webpack

        To bundle JavaScript files.

        default: `true`  
        options: boolean (`true` / `false`)

- ### assets

    The directory to gather all assets.

    default: `"./assets"`  
    options: string  
    example: `"./"` (directly under the theme direcotry)

- ### browsersync

    Browsersync settings.

    - #### browsers

        Browsers to open

        default: `[]`
        options: array
        example: `['Google Chrome', 'Firefox']`

- ### eslintLoader

    Eslint loader (for webpack) settings.

- ### imagemin

    Imagemin settings.

    - #### src

        The directory of image source files to compress.

        default: `"_images"`  
        options: string  
        example: `"src/images"`

    - #### dest

        The destination directory of compressed image files for imagemin.

        default: `"images"`  
        options: string  
        example: `"img"`

- ### jekyll

    Jekyll settings.

    - #### config

        Jekyll config files.

        - ##### default

            The default Jekyll config file(s).

            default: `"_config.yml"`  
            options: string (`"FILE1[,FILE2,...]"`)  
            example: `"_config1.yml,_config2.yml"`

        - ##### development

            Development mode config file(s) to override default settings.

            default: `""`  
            options: string (`"FILE1[,FILE2,...]"`)  
            example: `"_config_development"`

        - ##### production

            Production mode config file(s) to override default settings.

            default: `""`  
            options: string (`"FILE1[,FILE2,...]"`)  
            example: `"_config_production"`

    - #### dest

        The destination directory for the whole project.

        default: `"_site"`  
        options: string

    - #### includes

        The directory of includes.

        default: `"_includes"`  
        options: string

    - #### layouts

        The directory of layouts.

        default: `"_layouts"`  
        options: string

    - #### posts

        The directory of posts source files.

        default: `"_posts"`  
        options: string

- ### js

    - #### src

        The directory of JavaScript source files to bundle up by Browserify.

        default: `"_js"`  
        options: string  
        example: `"src/js`"

    - #### dest

        The JavaScript destination directory for Browserify.

        default: `"js"`  
        options: string  
        example: `"javascripts"`

    - #### entry

        File name(s) of JavaScript entry points.

        default: `["bundle.js"]`  
        options: array  
        example: `["pluginA.js", "pluginB.js", "main.js"]`

- ### sass

    Sass settings.

    - #### src

        The directory of Sass files.

        default: `"_sass"`  
        options: string  
        example: `"src/sass"`

    - #### dest

        The CSS destination directory for Sass.

        default: `"css"`  
        options: string  
        example: `"stylesheets"`

    - #### outputStyle

        The output style of Sass.

        default: `"compressed"`  
        options: `"expanded"`, `"nested"`, `"compact"`, `"compressed"`

    - #### autoprefixer

        Autoprefixer settings.

        - #### browsers

            List of browsers, which are supported in your theme.

            default: `["> 1%", "last 2 versions", "Firefox ESR"]`  
            options: array. See [Browserslist docs](https://github.com/ai/browserslist#queries) for available queries.  
            example: `["> 5%", "last 2 versions", "IE 8"]`

- ### webpack

    Webpack configuration. See [https://webpack.js.org/configuration/](https://webpack.js.org/configuration/).