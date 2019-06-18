module.exports = {
  siteMetadata: {
    title: `TITLE`, //Seasonal Anime Ratings
    author: `bakuzan`,
    avatar: 'https://cdn.myanimelist.net/images/userimages/2190005.jpg',
    description: `Breakdown of seasonal anime ratings for myanimelist user bakuzan`,
    siteUrl: 'https://bakuzan.github.io/hierophant-green',
    malUrl: 'https://myanimelist.net/profile/bakuzan',
    tierListUrl: 'https://yotanwa.herokuapp.com/',
    repoUrl: 'https://github.com/bakuzan/hierophant-green',
    githubUrl: 'https://github.com/bakuzan'
  },
  plugins: [
    `gatsby-plugin-emotion`,
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
