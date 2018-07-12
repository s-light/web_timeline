const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSourcePlugin = require(
    'html-webpack-inline-source-plugin'
);
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
            // template: 'index.template.ejs',
            template: './src/timeline_app.html',
            // title: 'Timeline App',
            // embed all javascript and css inline
            // inlineSource: '.(js|css)$',
        }),
        new HtmlWebpackInlineSourcePlugin()
    ],
    module: {
        rules: [
            // {
            //     test: /\.css$/,
            //     use: [
            //         {
            //             loader: 'style-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         },
            //         'css-loader',
            //         // { loader: 'style-loader/url', },
            //         // { loader: 'file-loader' },
            //     ]
            // },
            // {
            //     test: /\.html$/,
            //     use: [
            //         'file-loader?name=[path][name].[ext]!extract-loader!html-loader'
            //     ]
            // },
        ]
    },
    mode: 'development'
};
