'use strict';

var unplugin$1 = require('unplugin');
var chalk = require('chalk');

const unplugin = unplugin$1.createUnplugin(() => {
  return {
    name: 'unplugin-remove-vue-style',
    transformInclude (id) {
      return id.endsWith('.vue')
    },
    transform (code) {
      const stylePattern = /<style(([\s\S])*?)<\/style>/g;
      const warning = chalk.hex('#FFA500');

      if (stylePattern.test(code)) {
        console.info(warning('[plugin-theme-atomic-css]'), 'Removed the style tag from the *.vue file');
        console.info(warning('[plugin-theme-atomic-css]'), 'Please use theme(ElementPlus Theme/NaiveUI Theme/...) and atomic CSS(unocss/Windi CSS/...)');
        console.info(warning('[plugin-theme-atomic-css]'), 'more https://github.com/gimjin/unplugin-remove-vue-style#readme');
      }

      return code.replace(stylePattern, '')
    }
  }
});

const vitePluginRemoveVueStyle = unplugin.vite;
const rollupPluginRemoveVueStyle = unplugin.rollup;
const webpackPluginRemoveVueStyle = unplugin.webpack;
const esbuildPluginRemoveVueStyle = unplugin.esbuild;

exports.esbuildPluginRemoveVueStyle = esbuildPluginRemoveVueStyle;
exports.rollupPluginRemoveVueStyle = rollupPluginRemoveVueStyle;
exports.unplugin = unplugin;
exports.vitePluginRemoveVueStyle = vitePluginRemoveVueStyle;
exports.webpackPluginRemoveVueStyle = webpackPluginRemoveVueStyle;
