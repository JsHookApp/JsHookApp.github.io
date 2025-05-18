import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'
import AutoPrefixer from 'autoprefixer'
import TailWindCss from 'tailwindcss'

export default defineUserConfig({
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'JsHook',
      description: 'Android上用Js实现Hook',
    },
    '/en/': {
      lang: 'en-US',
      title: 'JsHook',
      description: 'Implementing Hook with Js on Android',
    },
  },
  bundler: viteBundler({
    viteOptions: {
      css: {
        postcss: {
          plugins: [
            TailWindCss(),
            AutoPrefixer(),
          ]
        }
      }
    }
  }),
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,
    locales: {
      '/': {
        selectLanguageName: '简体中文',
      },
      '/en/': {
        selectLanguageName: 'English',
      }
    }
  }),
})