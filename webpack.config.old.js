var webpack = require("webpack");
var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var merge = require('webpack-merge');

var TARGET = process.env.TARGET;
var ROOT_PATH = path.resolve(__dirname);

var common = {
    entry: {
        app: [path.resolve(ROOT_PATH, 'app/app')]
    //    ,        vendors: ['react']
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
    },
    output: {
        path: path.resolve(ROOT_PATH, 'build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            // test for both js and jsx
            test: /\.jsx?$/,

            // use babel loader with Stage 1 features
            loader: 'babel?stage=1',

            // operate only on our app directory
            include: path.resolve(ROOT_PATH, 'app')
        }]
    },
    plugins: [
        new HtmlwebpackPlugin({
            title: 'Survey test app, innit',
            template: 'app/index.html',
            inject: "body"
        })
    //    ,  new webpack.optimize.CommonsChunkPlugin('vendors', './js/vendors.js')
    ]
};

if (TARGET === 'build') {
    module.exports = merge(common, {
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loader: 'babel?stage=1',
                include: path.resolve(ROOT_PATH, 'app')
            }, {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("css-loader")
            }]
        },
        plugins: [
            new HtmlwebpackPlugin({
                title: 'Survey test app, innit',
                template: 'app/index.html',
                inject: "body"
            }),
            new ExtractTextPlugin("./css/app.css", {
                allChunks: true
            })
        ]
    });
}

if (TARGET === 'dev') {
    module.exports = merge(common, {
        devtool: 'source-map',
        module: {
            loaders: [{
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel'],
                include: path.resolve(ROOT_PATH, 'app')
            }, {
                test: /\.css$/,
                loaders: ['style', 'css']
            }]
        },
        devServer: {
            colors: true,
            historyApiFallback: true,
            hot: true,
            inline: true,
            progress: true
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin()
        ]
    });
}
