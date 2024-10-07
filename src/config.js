module.exports = {
  siteTitle: 'Hamza AFFANI | Software Engineer',
  siteDescription:
    'Hamza AFFANI is a software engineer & PCI Professional based in Paris, who specializes in developing secure and high-quality payment systems.',
  siteKeywords:
    'Hamza AFFANI, Hamza, Affani, haffani, software engineer, front-end engineer, Java developer, javascript, elaffani',
  siteUrl: 'https://haffani.netlify.com/',
  siteLanguage: 'en_US',
  name: 'EL AFFANI HAMZA',
  location: 'Paris, France',
  email: 'haffani.pcip@gmail.com',
  github: 'https://github.com/haffani',
  twitterHandle: '@haffani95',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/haffani/',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/hamza-affani/',
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/haffani95/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/haffani95',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
  /*  {
      name: 'Certifications',
      url: '/#certifications',
    },*/
    {
      name: 'Posts',
      url: '/#posts',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 100) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
