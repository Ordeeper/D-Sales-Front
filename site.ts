// since `.js, .ts` files are not included by default,
// the following comment tells UnoCSS to force scan this file (to pick the logo icon).
// @unocss-include

export default {
  name: 'D-Sales',
  description:
    'E-commerce com Afiliados',
  logo: 'i-fluent-emoji:shopping-bags',
  author: 'Pinegrow',
  url: 'https://pg-nuxtui.netlify.app',
  github: 'https://www.google.com/search?client=firefox-b-d&q=dsales',
  defaultLocale: 'pt', // default
  identity: {
    type: 'Organization',
  } as any,
  twitter: '@vuedesigner',
  trailingSlash: false, // default
  titleSeparator: '|', // default
  nav: [
    { text: 'ínicio', link: '/', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Mulheres', link: '/mulheres', type: 'primary', icon: 'i-mdi-home' },
    { text: 'Homens', link: '/homens', type: 'primary', icon: 'i-mdi-home' },
    {
      text: 'Joalheria',
      link: '/joalheria',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Eletrônicos',
      link: '/eletronicos',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Sobre Nós',
      link: '/quick-start',
      type: 'primary',
      icon: 'i-mdi-home',
    },
    {
      text: 'Rastrear Pedidos',
      link: '/track-order',
      type: 'secondary',
      icon: 'i-ic-outline-my-location',
    },
    {
      text: 'Histórico de Pedidos',
      link: '/order-history',
      type: 'secondary',
      icon: 'i-ic-baseline-history',
    },
    {
      text: 'Mensagens',
      link: '/returns',
      type: 'secondary',
      icon: 'i-material-symbols-assignment-return-outline-rounded',
    },
    {
      text: 'Politíca de Devolução',
      link: '/delivery-policy',
      type: 'secondary',
      icon: 'i-tabler-truck-return',
    },
    {
      text: 'Contate-nos',
      link: '/contact-us',
      type: 'secondary',
      icon: 'i-material-symbols-add-call',
    },
    {
      text: 'Ajuda & FAQ',
      link: '/help-faqs',
      type: 'secondary',
      icon: 'i-material-symbols-contact-support-outline',
    },
  ],
}
