module.exports = {
  siteMetadata: {
    title: `Un lugar para crecer`,
    description: 'Zona marketera es el lugar para crecer tu negocio',
    author: `@alexisrysc`,
    facebook: `https://facebook.com`,
    whatsap: `https://whatsap.com`,
    twitter: `https://twitter.com`,
    instagram: `https://instagram.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwind`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#4dc0b5`,
        display: `minimal-ui`,
        icon: `src/images/logo-zona-marketera-32.png`
      }
    },
    `gatsby-plugin-postcss`,
    {
      resolve: "gatsby-plugin-purgecss",
      options: {
        tailwind: true,
        purgeOnly: ["src/css/style.css", "src/css/global.css"]
      }
    }
  ]
};
