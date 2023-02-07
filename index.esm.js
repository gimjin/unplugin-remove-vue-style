import { createUnplugin } from 'unplugin'
import chalk from 'chalk'

export const unplugin = createUnplugin(() => {
  return {
    name: 'unplugin-theme-atomic-css',
    transformInclude (id) {
      return id.endsWith('.vue')
    },
    transform (code) {
      const stylePattern = /<style(([\s\S])*?)<\/style>/g
      const warning = chalk.hex('#FFA500')

      if (stylePattern.test(code)) {
        console.info(warning('[plugin-theme-atomic-css]'), 'Removed the style tag from the *.vue file')
        console.info(warning('[plugin-theme-atomic-css]'), 'Please use theme(ElementPlus Theme/NaiveUI Theme/...) and atomic CSS(unocss/Windi CSS/...)')
        console.info(warning('[plugin-theme-atomic-css]'), 'more https://github.com/gimjin/unplugin-theme-atomic-css#readme')
      }

      return code.replace(stylePattern, '')
    }
  }
})

export const vitePluginThemeAtomicCSS = unplugin.vite
export const rollupPluginThemeAtomicCSS = unplugin.rollup
export const webpackPluginThemeAtomicCSS = unplugin.webpack
export const esbuildPluginThemeAtomicCSS = unplugin.esbuild
