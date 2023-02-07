### Why use?
when developing a website, the theme is unique on the website, and there is no need to define styles in each vue file. This can better modify the overall style without losing everything.
It is enough to use atomic CSS (unocss/Windi CSS/...) for local style definition, without thinking about defining class name.
Ignore if developing a library.

开发网站时，主题在网站是唯一的，不用在每个vue文件定义样式。这样做能更好的修改整体样式，而不会丢三落四。
局部样式定义用atomic CSS(unocss/Windi CSS/...)已足够，不用思考定义class name。
如果开发库，请忽略。

### install
```bash
npm i unplugin-theme-atomic-css -D
```

### Configuration
##### Vite
```javascript
// vite.config.ts
import { vitePluginThemeAtomicCSS } from 'unplugin-theme-atomic-css'

export default defineConfig({
  plugins: [
    vitePluginThemeAtomicCSS()
  ]
})
```
##### Rollup
```javascript
// rollup.config.js
import { rollupPluginThemeAtomicCSS } from 'unplugin-theme-atomic-css'

export default {
  plugins: [
    rollupPluginThemeAtomicCSS()
  ]
}
```

##### Webpack
```javascript
// webpack.config.js
import { webpackPluginThemeAtomicCSS } from 'unplugin-theme-atomic-css'

module.exports = {
  plugins: [
    webpackPluginThemeAtomicCSS()
  ]
}
```

##### Esbuild
```javascript
// esbuild.config.js
import { build } from 'esbuild'
import { esbuildPluginThemeAtomicCSS } from 'unplugin-theme-atomic-css'

build({
  plugins: [
    esbuildPluginThemeAtomicCSS()
  ]
})
```
