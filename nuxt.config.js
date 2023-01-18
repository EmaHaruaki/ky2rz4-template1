export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ky2rz4-template1',
    htmlAttrs: {
      lang: 'ja'
    },
    bodyAttrs: {
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '本サイトはJamStack構成で作成したシンプルな企業向けサイトです。サービス情報、企業情報、お問い合わせフォームといった基本機能に加えて、ブログの利用も可能です。' },
      { name: 'format-detection', content: 'telephone=no' },

      { hid: 'og:site_name', property: 'og:site_name', content: 'GLOBALLY CONNECTED' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://ky2rz4-template1.g.kuroco-front.app/' },
      { hid: 'og:title', property: 'og:title', content: 'GLOBALLY CONNECTED' },
      { hid: 'og:description', property: 'og:description', content: '本サイトはJamStack構成で作成したシンプルな企業向けサイトです。サービス情報、企業情報、お問い合わせフォームといった基本機能に加えて、ブログの利用も可能です。' },
      { hid: 'og:image', property: 'og:image', content: 'サイトURL' },

      { hid: 'twitter:card', name: 'twitter:card', content: 'summary' },
      { hid: 'twitter:title', name: 'twitter:title', content: 'GLOBALLY CONNECTED' },
      { hid: 'twitter:description', name: 'twitter:description', content: '本サイトはJamStack構成で作成したシンプルな企業向けサイトです。サービス情報、企業情報、お問い合わせフォームといった基本機能に加えて、ブログの利用も可能です。' }
    ],
    script:[
      //{ src: 'js/jquery.js', defer: true },
      //{ src: 'js/navigation.js', defer: true },
      //{ src: 'js/functions.js', defer: true },
      //{ src: 'js/scripts.js', defer: true },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'assets/style.min.css',
    'assets/style.css',
    'assets/font-awesome-4.7.0/css/font-awesome.css',
    'assets/normalize.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/gtag',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: process.env.BASE_URL
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
