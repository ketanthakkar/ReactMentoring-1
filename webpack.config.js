const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

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
                title: "App",
                hash: true,
                template: path.resolve(__dirname, "./index.html")
            })
        ],

        devServer: {
            contentBase: "./dist"
        }
    };
};