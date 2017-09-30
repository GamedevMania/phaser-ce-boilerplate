const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
         contentBase: './build',
         compress: true,
    },
    plugins: [
        new UglifyJSPlugin(),
        new CleanWebpackPlugin(['build']),
        new CopyWebpackPlugin([
            { from: './node_modules/phaser-ce/build/phaser.min.js' },
            { from: 'src/assets', to: 'assets' }
        ]),
        new HtmlWebpackPlugin({
            title: 'Phaser Community Edition Boilerplate',
            template: 'src/index.ejs'
        })
    ],
    output: {
        filename: 'game.js',
        path: path.resolve(__dirname, 'build')
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
            loader: 'babel-loader',
            options: {
                presets: ['env']
            }
            }
        }
        ]
    }
};