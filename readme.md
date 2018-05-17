* 参考来源：https://doc.webpack-china.org/guides/getting-started/

### 启动
* dist 文件夹不需要，执行 npm run build 会自动生成编译后的文件
* npm run build

### 以下是安装命令，在package.json中都声明过，这里了解一下就可以
* npm init -y
* npm install webpack webpack-cli --save-dev
* npm install --save lodash
* npx webpack src/index.js --output dist/bundle.js
* npm install --save-dev style-loader css-loader
* npm install --save-dev file-loader
* npm install --save-dev html-webpack-plugin
* npm install clean-webpack-plugin --save-dev

### 参考网址
* optimization.splitChunks配置：https://juejin.im/post/5ae925cff265da0ba76f89b7
