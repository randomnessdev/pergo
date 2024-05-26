export default defineAppConfig({
  docus: {
    title: "Performance Ergonomie",
    description: "Comprendre le travail pour le transformer ensemble",
    // image: 'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: {
      // twitter: 'nuxt_js',
      // github: 'nuxt-themes/docus',
      // nuxt: {
      //   label: 'Nuxt',
      //   icon: 'simple-icons:nuxtdotjs',
      //   href: 'https://nuxt.com'
      // }
    },
    github: {
      dir: ".starters/default/content",
      branch: "main",
      repo: "docus",
      owner: "nuxt-themes",
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: false,
      textLinks: [
        {
          text: "Performance Ergonomie - 2024 - Tous droits réservés",
          href: "https://www.performance-ergonomie.com",
        },
      ],
    },
  },
});
