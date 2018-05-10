const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        index: "./src/index.js"
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HTMLWebpackPlugin({
            title: "Code Splitting"
        })
    ],
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
