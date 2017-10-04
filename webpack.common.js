const CONFIG = require('./config');
const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        game: CONFIG.MAIN_FILE,
        vendor: ['pixi', 'p2', 'phaser', 'webfontloader']
    },
    plugins: [
        new CleanWebpackPlugin([CONFIG.BUILD_PATH]),
        new HtmlWebpackPlugin({
            title: CONFIG.GAME_TITLE,
            template: CONFIG.INDEX_TEMPLATE_FILE
        }),
        new webpack.optimize.CommonsChunkPlugin({ 
            name: 'vendor'
        }),
    ],
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, CONFIG.BUILD_PATH)
    },
    node: {
        fs: 'empty',
        net: 'empty',
        tls: 'empty'
    },
    resolve: {
        alias: {
            'phaser': 'phaser-ce/build/custom/phaser-split.js',
            'pixi': 'phaser-ce/build/custom/pixi.js',
            'p2': 'phaser-ce/build/custom/p2.js',
            'assets': path.join(__dirname, '/src/assets'),
        },
        modules: [
            path.resolve('./node_modules')
        ]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        compact: false
                    }
                }
            },
            { 
                test: /pixi\.js/, 
                use: ['expose-loader?PIXI'] 
            },
            { 
                test: /phaser-split\.js$/, 
                use: ['expose-loader?Phaser'] 
            },
            { 
                test: /p2\.js/, 
                use: ['expose-loader?p2'] 
            },
            {
                test: /\.(png|jpg|gif|svg|pvr|pkm)$/,
                loader: 'file-loader',
                options: {
                    name: 'assets/[path][name].[ext]?[hash]',
                    context: 'src/assets'
                }
            },
        ]
    }
};