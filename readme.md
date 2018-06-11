### 本项目说明
* 本项目分支命名均为 https://webpack.docschina.org/guides/ 章节的拼音命名，
* 查看指南中的章节 code，可以切换分支运行代码
* 注意事项均写在各个分支下的 readme.md 文件中

### 一 webpack 介绍
* webpack 是一个现代 JavaScript 应用程序的静态模块打包器(module bundler)。当 webpack 处理应用程序时，它会递归地构建一个依赖关系图(dependency graph)，其中包含应用程序需要的每个模块，然后将所有这些模块打包成一个或多个 bundle。

### 二 webpack4 新特性
* 环境不再支持node.js v4
* 零配置
> webpack4 零配置只是说了不用你定义entry和output而已啦~

* 开发与生产模式
* 使用Babel转换ES6语法
* webpack4 去掉了CommonsChunkPlugin，取而代之为optimization.splitChunks 和
optimization.runtimeChunk这两个配置。

### 三 概念
* https://www.webpackjs.com/concepts/

### 四 高频出现的名词解释
* chunk
> 打包后的代码块的意思，chunkname就是打包后代码的名字。

* vendor
> 可以理解是把公用的部分抽出来的部分，一般的话可以自己定义那部分抽取出来，也可以通过webpack4的splitchunk来帮你抽离出来

* bundle一般都是出口文件

### 五 看代码
* https://github.com/xiaoyupao/webpack4-demo
* 重点介绍：管理资源，管理输出，开发，模块热替换，代码分离，渐进式网络应用程序