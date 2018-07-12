const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require(
    'html-webpack-inline-source-plugin');

// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
// https://github.com/thegc/html-webpack-inline-svg-plugin

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Timeline App',
            // embed all javascript and css inline
            // inlineSource: '.(js|css)$',
        }),
        new HtmlWebpackInlineSourcePlugin()
    ],
    mode: 'development'
};
