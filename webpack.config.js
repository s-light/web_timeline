const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const HtmlWebpackInlineSourcePlugin = require(
    'html-webpack-inline-source-plugin'
);
// const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');
// https://github.com/thegc/html-webpack-inline-svg-plugin

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// const devMode = process.env.NODE_ENV !== 'production';


const my_plugins = [
    new HtmlWebpackPlugin({
        template: './src/timeline_app.html',
        // embed all javascript and css inline
        // inlineSource: '.(js|css)$',
        alwaysWriteToDisk: true,
    }),
    new HtmlWebpackHarddiskPlugin(),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].css',
        chunkFilename: '[id].css'
    }),
];

const my_rules = [
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
    {
        test: /\.css$/,
        use: [{
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'file-loader'
        }],
    },
    {
        test: /\.scss$/,
        use: [{
            // fallback to style-loader in development
            // devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
            // loader: "style-loader"
            loader: MiniCssExtractPlugin.loader
        }, {
            loader: 'css-loader',
            options: {
                sourceMap: true
            }
        }, {
            loader: 'sass-loader',
            options: {
                sourceMap: true
            }
        }],
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
    }
];

module.exports = {
    entry: './src/index.js',
    devtool: 'source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        },
    },
    plugins: my_plugins,
    module: {rules: my_rules},
    mode: 'development'
    // mode: 'production'
};
