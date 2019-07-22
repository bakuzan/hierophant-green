module.exports = {
  SEASON_LIST: `
  query SeasonItems(
    $type: StatType
    $isAdult: Boolean
    $breakdown: StatBreakdown
    $season: HistoryPartition
  ) {
    value: statsHistoryDetail(
      type: $type
      isAdult: $isAdult
      breakdown: $breakdown
      partition: $season
    ) {
      id
      title
      rating
      average
      highest
      lowest
      mode
    }
  }  
  `,
  SERIES_DATA: `
  query SeriesData($id: Int!) {
    value: animeById(id: $id) {
      id
      image
      malId
    }
  }
  `,
  CURRENTLY_AIRING: `
  query CurrentlyAiring {
    value: currentSeason {
      id
      title
      rating
      average
      highest
      lowest
      mode
    }
  }
  `
};
