var config = require('../config')
var webpack = require('webpack')
var merge = require('webpack-merge')
var utils = require('./utils')
var baseWebpackConfig = require('./webpack.base.conf')
var HtmlWebpackPlugin = require('html-webpack-plugin')

var path = require("path");
var TimestampWebpackPlugin = require('timestamp-webpack-plugin');


// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function(name) {
    baseWebpackConfig.entry[name] = ['./build/dev-client'].concat(baseWebpackConfig.entry[name])
})

module.exports = merge(baseWebpackConfig, {
    module: {
        loaders: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    },
    // eval-source-map is faster for development
    devtool: '#eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env
        }),

        new TimestampWebpackPlugin({
            path: path.join(__dirname, '../static'),
            // default output is timestamp.json
            filename: 'timestamp.json'
        }),

        // remove locale files from moment.js
        new webpack.IgnorePlugin(/^\.\/locale$/, [/moment$/]),


        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        // new HtmlWebpackPlugin({
        //     filename: 'index.html',
        //     template: 'index.html',
        //     inject: true
        // })

        new HtmlWebpackPlugin({
            filename: config.build.index,
            title: 'ICJIA | Violent Crime Data Project 2017',
            template: 'index.ejs',
            inject: false,
            date: new Date(),
            appMountId: 'app',
            minify: {
                removeComments: false,
                collapseWhitespace: false,
                removeAttributeQuotes: false
                    // more options:
                    // https://github.com/kangax/html-minifier#options-quick-reference
            },
            // necessary to consistently work with multiple chunks via CommonsChunkPlugin
            chunksSortMode: 'dependency'
        }),
    ]
})