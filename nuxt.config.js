export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Игнатова Анна | Портфолио',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Frontend Developer - Игнатова Анна' },
      { hid: 'keywords', name: 'keywords', content: 'Web-разработка, JavaScript, Vue.js, HTML5, CSS3, Bootstrap, Sass/Scss, Nuxt.js, фреймворки' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'icons.png' },
      {href: 'https://fonts.gstatic.com' , rel:'preconnect'},
      {href: 'https://fonts.googleapis.com' , rel:'preconnect'},
      {href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap' , rel:'stylesheet'}
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
    { src: '~/plugins/vue-session.client.js'},
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
