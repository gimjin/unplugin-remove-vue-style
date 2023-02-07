import { createUnplugin } from 'unplugin'
import chalk from 'chalk'

export const unplugin = createUnplugin(() => {
  return {
    name: 'unplugin-remove-vue-style',
    transformInclude (id) {
      return id.endsWith('.vue')
    },
    transform (code) {
      const stylePattern = /<style(([\s\S])*?)<\/style>/g
      const warning = chalk.hex('#FFA500')

      if (stylePattern.test(code)) {
        console.info(warning('[plugin-theme-atomic-css]'), 'Removed the style tag from the *.vue file')
        console.info(warning('[plugin-theme-atomic-css]'), 'Please use theme(ElementPlus Theme/NaiveUI Theme/...) and atomic CSS(unocss/Windi CSS/...)')
        console.info(warning('[plugin-theme-atomic-css]'), 'more https://github.com/gimjin/unplugin-remove-vue-style#readme')
      }

      return code.replace(stylePattern, '')
    }
  }
})

export const vitePluginRemoveVueStyle = unplugin.vite
export const rollupPluginRemoveVueStyle = unplugin.rollup
export const webpackPluginRemoveVueStyle = unplugin.webpack
export const esbuildPluginRemoveVueStyle = unplugin.esbuild
