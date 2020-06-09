const save = require('./tools/save')

// 一个 JavaScript 命名函数。
function MyWebpackPlugin(options) {
  this.options = options
};

// 在插件函数的 prototype 上定义一个 `apply` 方法。
MyWebpackPlugin.prototype.apply = function(compiler) {
  // 指定一个挂载到 webpack 自身的事件钩子。
  compiler.hooks.beforeRun.tap('my-webpack-plugin', () => {

    console.log("This is an example plugin!!!");
    const { pages }= this.options
    console.log(pages)
  });
};

module.exports = MyWebpackPlugin;