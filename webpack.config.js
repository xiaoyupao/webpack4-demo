const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    plugins: [
        new webpack.ProvidePlugin({
            //    _: 'lodash'
            join: ["lodash", "join"]
        })
    ],
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    }
};
