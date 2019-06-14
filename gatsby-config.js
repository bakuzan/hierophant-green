module.exports = {
  siteMetadata: {
    title: `Hierophant Green`,
    author: `bakuzan`,
    description: `Seasonal Anime Statistics`,
    siteUrl: 'http://localhost:8000/'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
        omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hierophant-green`,
        short_name: `hierophant`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#339999`,
        display: `minimal-ui`,
        icon: `src/assets/icon.png`,
        theme_color_in_head: false
      }
    },
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ]
};
