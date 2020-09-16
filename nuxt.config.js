import vi_locale from "./locales/vi.js"
import en_locale from "./locales/en.js"

module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "langfrontend_laguage",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /**
   * load css
   */
  css: ["~/assets/scss/main.scss"],
  styleResources: {
    scss: ["~/assets/scss/*.scss"],
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/,
        })
      }
    },
  },
  modules: ["nuxt-i18n", "@nuxtjs/pwa", "@nuxtjs/style-resources"],
  i18n: {
    locales: ["en", "vi"],
    defaultLocale: "vi",
    vueI18n: {
      fallbackLocale: "vi",
      messages: {
        en: en_locale,
        vi: vi_locale,
      },
    },
  },
}
