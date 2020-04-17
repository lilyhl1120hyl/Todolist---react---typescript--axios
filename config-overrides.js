// module.exports = function override(config, env) {
//  // do stuff with the webpack config...
//  return config;
// };

// 按需加载的配置 fixBabelImports, less主题配置 addLessLoader
const { override, fixBabelImports, addLessLoader } = require('customize-cra');

 module.exports = override(
    fixBabelImports('import', {
      libraryName: 'antd',
      libraryDirectory: 'es',
      // style: 'css',
      style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' },
      }),
  );