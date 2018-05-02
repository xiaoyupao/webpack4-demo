* 参考来源：https://doc.webpack-china.org/guides/getting-started/

### 启动
* dist 中只留 index.html，bundle.js 执行 npm run build 后会自动生成
* npm run start 跑的dev的配置，启8080端口的url
* npm run build 跑的prod的配置，在生成dist文件中index.html在浏览器中打开
过的函数

### 以下是安装命令，在package.json中都声明过，这里了解一下就可以
* npm init -y
* npm install webpack webpack-cli --save-dev
* npm install --save lodash
* npx webpack src/index.js --output dist/bundle.js
* npm run build

* npm i clean-webpack-plugin --save-dev
* npm install --save-dev webpack-merge
* npm install --save-dev html-webpack-plugin
* npm install --save-dev webpack-dev-server

### 若报错，没啥用
* 报错 “This is probably not a problem with npm. There is likely additional logging output above”
* 解决方案见：https://github.com/JeffreyWay/laravel-mix/issues/1016
<pre>
    rm -rf node_modules
    rm package-lock.json
    npm cache clear --force
    npm install
</pre>
