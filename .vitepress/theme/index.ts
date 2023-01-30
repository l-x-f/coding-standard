import DefaultTheme from 'vitepress/theme'
import type { App } from 'vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './style.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }: { app: App }) {
    app.use(ElementPlus)
  }
}
