const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: "./src/index.js",
        another: "./src/another-module.js"
    },
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HTMLWebpackPlugin({
            title: "Code Splitting"
        })
    ],
    optimization: {
		splitChunks: {
			minSize: 1,
            chunks: "initial",
			name:"common"  // 指定公共 bundle 的名称。
		}
	},
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
