export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Портфолио Игнатова Анна',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend-разработчик - Игнатова Анна' },
      { hid: 'keywords', name: 'description', content: 'Web-разработка, HTML5, CSS3, BOOTSTRAP, VUE.JS, JAVASCRIPT, SASS/SCSS, NUXT.JS, фреймворки' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icons.png' },
      {href: 'https://fonts.googleapis.com/css2?family=El+Messiri:wght@400;500;600;700&display=swap' , rel:'stylesheet'}
    ]
  },
  server:{
    host: "0.0.0.0",
    port: 3000
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
