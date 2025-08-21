// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme-without-fonts'
import DeviceTag from '../../extra/components/devicetags/deviceTag.vue'
import ProductPage from '../../extra/components/pageTemplate/ProductPage.vue'
import AuthorLink from '../../extra/components/author/AuthorLink.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  // 移除 Layout 覆盖。VitePress 的默认布局会根据 frontmatter.layout 自动处理。
  // 我们只需要将自定义布局注册为全局组件即可。
  enhanceApp({ app, router, siteData }) {
    // Register global components here
    app.component('DeviceTags', DeviceTag)
    app.component('ProductPage', ProductPage) // 将 ProductPage 注册为可用的布局
    app.component('AuthorLink', AuthorLink)
  }
} satisfies Theme
