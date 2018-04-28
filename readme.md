* 参考来源：https://doc.webpack-china.org/guides/getting-started/

### 启动
* dist 文件夹不需要，执行下面两个命令中的任一个，均会自动生成编译后文件
> webpack 中有下面三种不同的选项，可以帮助你在代码发生变化后自动编译代码, 但并不是自动刷新浏览器，自动刷新浏览器见：模块热更新
* npm run watch : 开发中使用 webpack 的观察模式
* npm run start : 开发中使用 webpack-dev-server, 将自动打开 http://localhost:8080/
* npm run server : 开发中使用 webpack-dev-middleware，配合 express, 手动在浏览器中打开 http://localhost:3000

### 以下是安装命令，在package.json中都声明过，这里了解一下就可以
* npm init -y
* npm install webpack webpack-cli --save-dev
* npm install --save lodash
* npx webpack src/index.js --output dist/bundle.js
* npm install --save-dev style-loader css-loader
* npm install --save-dev file-loader
* npm install --save-dev html-webpack-plugin
* npm install clean-webpack-plugin --save-dev
* npm install --save-dev webpack-dev-server
* npm install --save-dev express webpack-dev-middleware

