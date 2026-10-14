export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    },
    pageHero: {
      slots: {
        title: 'font-semibold sm:text-6xl',
        container: '!pb-0'
      }
    },
    pageCard: {
      slots: {
        container: 'lg:flex min-w-0',
        wrapper: 'flex-none'
      }
    },
    footer: {
      slots: {
        root: 'border-t border-default',
        left: 'text-sm text-muted'
      }
    }
  },
  seo: {
    siteName: 'Asura'
  },
  header: {
    title: '',
    to: '/',
    logo: {
      alt: '',
      light: '',
      dark: ''
    },
    search: true,
    colorMode: true,
    links: [{
      'icon': 'i-simple-icons-instagram',
      'to': 'https://go.91.pt/instagram',
      'target': '_blank',
      'aria-label': 'Instagram'
    }]
  },
  footer: {
    credits: `Asura • © ${new Date().getFullYear()}`,
    colorMode: false,
    links: [{
      'icon': 'i-simple-icons-discord',
      'to': 'https://go.91.pt/discord',
      'target': '_blank',
      'aria-label': 'on Discord'
    }, {
      'icon': 'i-simple-icons-x',
      'to': 'https://go.91.pt/x',
      'target': '_blank',
      'aria-label': 'on X'
    }, {
      'icon': 'i-simple-icons-instagram',
      'to': 'https://go.91.pt/instagram',
      'target': '_blank',
      'aria-label': 'on Instagram'
    }]
  },
  toc: {
    title: '章节',
    bottom: {
      title: '社区',
      edit: 'https://zaeth.com',
      links: [{
        icon: 'i-lucide-star',
        label: 'Mirai Studio',
        to: 'https://mirai.st',
        target: '_blank'
      }, {
        icon: 'i-lucide-book-open',
        label: 'Sai Studio',
        to: 'https://sai.st',
        target: '_blank'
      }]
    }
  }
})
