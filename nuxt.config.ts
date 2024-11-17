// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
    '@nuxtjs/google-fonts'  // 追加
  ],
  googleFonts: {
    families: {
      'Noto+Sans+JP': [100, 300, 400, 500, 700, 900],
      'M+PLUS+Rounded+1c': [400, 700],
      'Roboto': [100, 300, 400, 500, 700, 900],
    },
    display: 'swap',
    preload: true,
    download: true,
  },
  runtimeConfig: {
    MICROCMS_SERVICE_DOMAIN: process.env.MICROCMS_SERVICE_DOMAIN,
    MICROCMS_API_KEY: process.env.MICROCMS_API_KEY,
  },
})
