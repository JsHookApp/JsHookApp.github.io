import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  description: 'Android上用Js实现Hook',

  themeConfig: {
    nav: nav(),

    lastUpdatedText: '最后更新',

    socialLinks: [
      { icon: 'github', link: 'https://github.com/JsHookApp' }
    ],

    footer: {
        message: '在 GPL3 许可证下发布。',
        copyright: 'Copyright © 2022-现在 JsHook 开发者'
    }
  }
})

function nav() {
  return [
    { text: 'Telegram', link: 'https://t.me/jshookapp' }
  ]
}
