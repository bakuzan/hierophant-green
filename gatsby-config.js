module.exports = {
  pathPrefix: 'hierophant-green',
  siteMetadata: {
    generatedDate: (() => new Date().toISOString())(),
    title: `Seasonal Anime Ratings`,
    author: `bakuzan`,
    description: `Breakdown of seasonal anime ratings for myanimelist user bakuzan`,
    siteUrl: 'https://bakuzan.github.io/hierophant-green',
    repoUrl: 'https://github.com/bakuzan/hierophant-green',
    githubUrl: 'https://github.com/bakuzan',
    malUrl: 'https://myanimelist.net/profile/bakuzan',
    tierListUrl: 'https://yotanwa.herokuapp.com/'
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`
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
    `gatsby-plugin-sass`
    // Removed as breaks app when js is disabled
    // `gatsby-plugin-offline`
  ]
};
