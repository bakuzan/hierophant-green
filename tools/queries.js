module.exports = {
  FETCH_SEASON: `
  query FetchSeason($season:String!) {
    value: seasonEpisodes(season:$season) {
      season
      series {
        id
        title
        image
        malId
        rating
        totalEpisodes
        season {
          year
          season
        }
      }
      episodes {
        id
        date
        episode
        rating
        animeId
      }
    }
  }
  `
};
