var pkg = require('./package.json');
var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var nib = require('nib');
var banner = [
    pkg.name.replace(/^@\w+\//, '') + ' v' + pkg.version,
    '(c) ' + new Date().getFullYear() + ' Trend Micro, Inc.',
    pkg.license,
    pkg.homepage
].join(' | ');

module.exports = {
    devtool: 'source-map',
    entry: {
        'react-buttons': path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.join(__dirname, 'lib'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    externals: Object.keys(pkg.dependencies),
    module: {
        preLoaders: [
            // http://survivejs.com/webpack_react/linting_in_webpack/
            {
                test: /\.jsx?$/,
                loaders: ['eslint'],
                exclude: /node_modules/
            },
            {
                test: /\.styl$/,
                loader: 'stylint'
            }
        ],
        loaders: [
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /(node_modules|bower_components)/
            },
            {
                test: /\.styl$/,
                loader: ExtractTextPlugin.extract(
                    'style',
                    'css?-autoprefixer&modules&importLoaders=1&localIdentName=buttons---[local]---[hash:base64:5]!stylus'
                )
            },
            {
                test: /\.css$/,
                loader: 'style!css?-autoprefixer'
            }
        ]
    },
    stylus: {
        // nib - CSS3 extensions for Stylus
        use: [nib()],
        // no need to have a '@import "nib"' in the stylesheet
        import: ['~nib/lib/nib/index.styl']
    },
    plugins: [
        new ExtractTextPlugin('../dist/react-buttons.css'),
        new webpack.BannerPlugin(banner)
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};
