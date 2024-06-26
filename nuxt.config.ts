export default defineNuxtConfig({
  devtools: {
    enabled: true,
  },
  modules: [
    "@nuxt/ui",
    "nuxt-icon",
    "@nuxtjs/google-fonts",
    "@nuxtjs/fontaine",
    "@nuxt/image",
    "@nuxt/content",
    "@nuxthq/studio",
    "@vueuse/nuxt",
    '@nuxtjs/i18n',
    "@stefanobartoletti/nuxt-social-share",
    ['@nuxtjs/robots', { 
      UserAgent: '*',
      Disallow: '/',
     }],
     'nuxt-gtag'
  ],
  ui: {
    icons: ["heroicons", "lucide"],
  },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: "/favicon.ico" }],
      htmlAttrs: {
        lang: "es",
        class: "h-full",
      },
      bodyAttrs: {
        class: "antialiased bg-gray-50 dark:bg-black min-h-screen",
      },
    },
  },
  content: {
    highlight: {
      theme: "github-dark",
    },
  },
  googleFonts: {
    display: "swap",
    families: {
      Inter: [400, 500, 600, 700, 800, 900],
    },
  },
  ssr: false,

  gtag: {
    id: 'G-P9V88JWYF3',
    config: {
      page_title: 'Camilo M. Couselo Alonso'
    },
  }
});