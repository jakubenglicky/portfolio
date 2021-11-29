export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'portfolio',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/bootstrap.min.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/LineIcons.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/magnific-popup.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/default.css' },
      { rel: 'stylesheet', type: 'text/css', href: '/assets/css/style.css' }
    ],
    script: [
      { src: '/assets/js/vendor/modernizr-3.6.0.min.js', body: true },
      { src: '/assets/js/vendor/jquery-1.12.4.min.js', body: true },
      { src: '/assets/js/vendor/assets/js/bootstrap.min.js', body: true },
      { src: '/assets/js/popper.min.js', body: true },
      { src: '/assets/js/parallax.min.js', body: true },
      { src: '/assets/js/jquery.magnific-popup.min.js', body: true },
      { src: '/assets/js/waypoints.min.js', body: true },
      { src: '/assets/js/jquery.counterup.min.js', body: true },
      { src: '/assets/js/assets/js/ajax-contact.js', body: true },
      { src: '/assets/js/jquery.appear.min.js', body: true },
      { src: '/assets/js/scrolling-nav.js', body: true },
      { src: '/assets/js/jquery.easing.min.js', body: true },
      { src: '/assets/js/main.js', body: true },
    ]

  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto impor
  //   // ORt components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
