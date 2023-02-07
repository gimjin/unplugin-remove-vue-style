'use strict';

var unplugin$1 = require('unplugin');
var chalk = require('chalk');

const unplugin = unplugin$1.createUnplugin(() => {
  return {
    name: 'unplugin-theme-atomic-css',
    transformInclude (id) {
      return id.endsWith('.vue')
    },
    transform (code) {
      const stylePattern = /<style(([\s\S])*?)<\/style>/g;
      const warning = chalk.hex('#FFA500');

      if (stylePattern.test(code)) {
        console.info(warning('[plugin-theme-atomic-css]'), 'Removed the style tag from the *.vue file');
        console.info(warning('[plugin-theme-atomic-css]'), 'Please use theme(ElementPlus Theme/NaiveUI Theme/...) and atomic CSS(unocss/Windi CSS/...)');
        console.info(warning('[plugin-theme-atomic-css]'), 'more https://github.com/gimjin/unplugin-theme-atomic-css#readme');
      }

      return code.replace(stylePattern, '')
    }
  }
});

const vitePluginThemeAtomicCSS = unplugin.vite;
const rollupPluginThemeAtomicCSS = unplugin.rollup;
const webpackPluginThemeAtomicCSS = unplugin.webpack;
const esbuildPluginThemeAtomicCSS = unplugin.esbuild;

exports.esbuildPluginThemeAtomicCSS = esbuildPluginThemeAtomicCSS;
exports.rollupPluginThemeAtomicCSS = rollupPluginThemeAtomicCSS;
exports.unplugin = unplugin;
exports.vitePluginThemeAtomicCSS = vitePluginThemeAtomicCSS;
exports.webpackPluginThemeAtomicCSS = webpackPluginThemeAtomicCSS;
