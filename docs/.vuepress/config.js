module.exports = {
  title: 'geekdongTest',
  head: [
['link',{rel: 'icon',href: '/favicon.ico'}]
  ],
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [{
        text: 'Home',
        link: '/'
      },
      {
        text: 'Guide',
        link: '/guide/'
      },
      {
        text: 'Idea',
        link: '/Idea/vscode/快捷键'
      },
      {
        text: 'External',
        link: 'https://google.com'
      },
    ],
    sidebar: 'auto'
  }
}