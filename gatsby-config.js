module.exports = {
  siteMetadata: {
    title: `Untitled Gatsby Project`,
    author: `bakuzan`,
    description: `Work in progress. Learning Gatsby`,
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
        name: `untitled gatsby project`,
        short_name: `ugp`,
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
