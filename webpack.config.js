const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // entry: {
    //     index: "./src/index.js",
    //     // vendor2: ['lodash']
    // },
    entry: './src/index.js',
    // entry: {
    //     main: "./src/index.js",
    //     vendor: ["lodash"]
    // },
    // mode: "development",
    plugins: [
        new CleanWebpackPlugin(["dist"]),
        new HTMLWebpackPlugin({
            title: "Caching"
        })
    ],
    // optimization: {
    //     splitChunks: {
    //         minSize: 1,
    //         chunks: "initial",
    //         name: "manifest" // 指定公共 bundle 的名称。
    //     },
    //     // splitChunks: {
    //     //     minSize: 1,
    //     //     chunks: "initial",
    //     //     name: "vendor" // 指定公共 bundle 的名称。
    //     // }
    // },
    optimization: {
        splitChunks: {
          chunks: "all",
          cacheGroups: {
            // 提取 node_modules 中代码
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all"
            },
            commons: {
              // async 设置提取异步代码中的公用代码
              chunks: "async",
              name: 'commons-async',
              /**
               * minSize 默认为 30000
               * 想要使代码拆分真的按照我们的设置来
               * 需要减小 minSize
               */
              minSize: 0,
              // 至少为两个 chunks 的公用代码
              minChunks: 2
            }
          }
        },
        /**
         * 对应原来的 minchunks: Infinity
         * 提取 webpack 运行时代码
         * 直接置为 true 或设置 name
         */
        runtimeChunk: {
          name: 'manifest'
        }
      },
    output: {
        filename: "[name].[chunkhash].js",
        path: path.resolve(__dirname, "dist")

        // path: path.resolve(__dirname, "dist"), // 资源文件输出时写入的路径
        // filename: "static/js/[name].[chunkhash].js", // 使用 chunkhash 加入文件名做文件更新和缓存处理
        // chunkFilename: "static/js/[name].[chunkhash].js"
    }
};
