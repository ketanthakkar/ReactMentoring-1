var path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require('webpack');

module.exports = {
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                exclude: /dist|node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
};
