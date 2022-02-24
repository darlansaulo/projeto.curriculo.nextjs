module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    gridTemplateAreas: {
      'layout': [
        'DateYearComponent    HeaderComponent    SocialMediaComponent',
        'DateYearComponent    BodyComponent      SocialMediaComponent',
        'DateYearComponent    FooterComponent    SocialMediaComponent',
      ],
    },
    extend: {
    },
  },
  plugins: [
    require('@savvywombat/tailwindcss-grid-areas')
  ],
}
