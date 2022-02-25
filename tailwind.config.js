module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateAreas: {
      'layoutDesktop': [
        'DateYearComponent    HeaderComponent    SocialMediaComponent',
        'DateYearComponent    BodyComponent      SocialMediaComponent',
        'DateYearComponent    FooterComponent    SocialMediaComponent',
      ],
      'layoutMobile': [
        'DateYearComponent      DateYearComponent       DateYearComponent',
        'HeaderComponent        HeaderComponent         HeaderComponent',
        'BodyComponent          BodyComponent           BodyComponent',
        'FooterComponent        FooterComponent         FooterComponent',
        'SocialMediaComponent   SocialMediaComponent    SocialMediaComponent',
      ],
    },
    extend: {
    },
    screens: {
      'mobile': { 'max': '640px' },
      // => @media (max-width: 640px) { ... }

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',

      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
