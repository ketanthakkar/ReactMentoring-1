const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const APP_TITLE = "App";

module.exports = env => {
    const isProduction = env ? env.prod : false;

    return {
        context: path.join(__dirname, "src"),
        entry: "./",
        mode: isProduction ? "production" : "development",
        devtool: isProduction ? "none" : "source-map",

        resolve: {
            extensions: [".js"]
        },

        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    loader: "babel-loader",
                    exclude: /node_modules/
                }
            ]
        },

        plugins: [
            new HtmlWebpackPlugin({
                title: APP_TITLE,
                hash: true,
                template: "./index.html"
            })
        ],

        devServer: {
            contentBase: path.resolve(__dirname, "dist")
        },

        optimization: {
            splitChunks: {
                cacheGroups: {
                    commons: {
                        test: /[\\/]node_modules[\\/]/,
                        name: "vendor",
                        chunks: "all"
                    }
                }
            },
            minimizer: [
                new UglifyJsPlugin({
                    cache: true,
                    parallel: true
                })
            ]
        },

        output: {
            filename: "[name].[chunkhash].js",
            path: path.resolve(__dirname, "dist")
        }
    };
};