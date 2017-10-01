const CONFIG = require('./config');
const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: CONFIG.MAIN_FILE,
    plugins: [
        new CleanWebpackPlugin([CONFIG.BUILD_PATH]),
        new CopyWebpackPlugin([
            { from: CONFIG.PHASER_PATH },
            { from: CONFIG.ASSETS_PATH, to: 'assets' }
        ]),
        new HtmlWebpackPlugin({
            title: CONFIG.GAME_TITLE,
            template: CONFIG.INDEX_TEMPLATE_FILE
        })
    ],
    output: {
        filename: CONFIG.OUTPUT_FILE,
        path: path.resolve(__dirname, CONFIG.BUILD_PATH)
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