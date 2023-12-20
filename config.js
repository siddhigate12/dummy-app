module.exports = {
  version: "1.0.0",
  urlMapping: {
    globalPrefix: "/",
    entries: {},
  },
  props: {
    header: {
      logo: {
        imageUrl: 'https://sharefable.com/fable-logo.svg',
        title: 'Fable Docs',
      },
      navLinks: {
        alignment: 'center',
        links: [
          { title: 'Visit Fable', url: 'https://sharefable.com' },
          { title: 'added Fable', url: 'https://added-sharefable.com' }
        ]
      }
    },
    sidepanel: {},
    content: {},
    footer: {},
  },
  theme: {
    colors: {
      primary: "red", 
      text: "#green", 
      accent: "#c7d2fe",
      border: "#d1d5db",
    },
    typography: {
      fontSize: 16, 
      fontFamily: "Times New Roman", 
      lineHeight: 1.5,
    },
  }
}
