* 参考来源：https://doc.webpack-china.org/guides/getting-started/

### 启动
* dist 中只留 index.html，bundle.js 执行 npm run build 后会自动生成
* npm run dev 或者 npx webpack --mode development  , bundle.js中就会出现未使用过的 math.js中的 square函数
* npm run build 或者 npx webpack --mode production, 是生产环境，bundle.js不会出现未使用
过的函数
* 个人觉得好像本身 npm run build 就可以实现 treeShaking 啊
* 注意一下 sideEffects 详见官网

### 以下是安装命令，在package.json中都声明过，这里了解一下就可以
* npm init -y
* npm install webpack webpack-cli --save-dev
* npm install --save lodash
* npx webpack src/index.js --output dist/bundle.js
* npm run build

