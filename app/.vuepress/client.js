import { defineClientConfig } from 'vuepress/client'

import './theme/tailwind.css'
import './theme/style.css'

import ArcoVue from '@arco-design/web-vue'
import '@arco-design/web-vue/dist/arco.css'

import home from './components/home.vue'
import home2 from './components/home2.vue'

export default defineClientConfig({
  layouts: {
    home,
    home2
  },
  enhance({ app, router, siteData }) {
    app.use(ArcoVue)
  },
  setup() { },
  rootComponents: [],
})