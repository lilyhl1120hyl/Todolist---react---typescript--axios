
# 安装，启动，打包命令
### `yarn `

### `yarn start`

### `yarn test`

### `yarn build`

### `yarn eject`


# 创建一个支持typescript的项目
$ npx create-react-app my-app --typescript
或者
$ yarn create react-app my-app --typescript

# 将 TypeScript 添加到 Create React App 项目
$ npm install --save typescript @types/node @types/react @types/react-dom @types/jest
或者
$ yarn add typescript @types/node @types/react @types/react-dom @types/jest

# yarn 或 npm 安装并引入 antd。

$ yarn add antd

# 对 create-react-app 默认配置进行自定义,引入 react-app-rewired 并修改 package.json 里的启动配置。由于新的 react-app-rewired@2.x 版本的关系，你还需要安装 customize-cra。

$ yarn add react-app-rewired customize-cra

/* package.json */
"scripts": {
-   "start": "react-scripts start",
+   "start": "react-app-rewired start",
-   "build": "react-scripts build",
+   "build": "react-app-rewired build",
-   "test": "react-scripts test",
+   "test": "react-app-rewired test",
}

 /* config-overrides.js 用于修改默认配置 */

module.exports = function override(config, env) {
  // do stuff with the webpack config...
  return config;
};

# babel-plugin-import 是一个用于按需加载组件代码和样式的 babel 插件

$ yarn add babel-plugin-import

/* 修改 config-overrides.js 文件 */
 const { override, fixBabelImports } = require('customize-cra');

- module.exports = function override(config, env) {
-   // do stuff with the webpack config...
-   return config;
- };
+ module.exports = override(
+   fixBabelImports('import', {
+     libraryName: 'antd',
+     libraryDirectory: 'es',
+     style: 'css',
+   }),
+ );

/* 移除前面在 src/App.css 里全量添加的 @import '~antd/dist/antd.css' */

# 自定义主题需要用到 less 变量覆盖功能

$ yarn add less less-loader

/* 引入 customize-cra 中提供的 less 相关的函数 addLessLoader 来帮助加载 less 样式，同时修改 config-overrides.js */

- const { override, fixBabelImports } = require('customize-cra');
+ const { override, fixBabelImports, addLessLoader } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
-   style: 'css',
+   style: true,
  }),
+ addLessLoader({
+   javascriptEnabled: true,
+   modifyVars: { '@primary-color': '#1DA57A' },
+ }),
);

# 配置 react-router-dom 

$ yarn add react-router-dom

# 配置 react-redux
react-redux插件是基于redux的，必须先安装redux先再使用react-redux

$ yarn add redux react-redux 

# Redux store 仅支持同步数据流。使用 thunk 等中间件可以帮助在 Redux 应用中实现异步性
$ yarn add redux-thunk


# 利用redux-persist数据持久化

$ yarn add redux-persist

# localforage 作为离线存储

$ yarn add localforage

# redux-devtools-extension 开发工具

$ yarn add redux-devtools-extension

# 实现前端 log 日志打印功能 redux-logger

$ yarn add redux-logger

# IE浏览器打开空白，兼容
$ yarn add react-app-polyfill

src下的index.js也就是js入口文件中写入

import  "react-app-polyfill/ie11";
import  "react-app-polufill/stable";

根据官网的提示，还需要在package.json文件中的browserslist中添加ie11

  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all",
      "ie 11"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version",
      "ie 11"
    ]
  }



  







