import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "JsHook",
  description: "Implementing Hook with Js on Android",
  appearance: 'force-dark',
  themeConfig: {
    nav: [
      { text: 'Telegram', link: 'https://t.me/jshookapp' }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JsHookApp' }
    ],

    footer: {
      message: '在 GPL3 许可证下发布。',
      copyright: 'Copyright © 2022-现在 JsHook 开发者'
    }
  }
})
