const { SEASON_LIST, SERIES_DATA } = require('./queries');
const { query, writeOut } = require('./utils');

module.exports = async function writeSeasonsData(inputs, targetFolder) {
  for (let season of inputs) {
    const result = await query(SEASON_LIST, {
      type: 'Anime',
      isAdult: false,
      breakdown: 'Season',
      season
    });

    const seriesData = await Promise.all(
      result.map((series) => query(SERIES_DATA, { id: series.id }))
    );

    const series = result.map((x) => {
      const d = seriesData.find((s) => s.id === x.id);
      if (!d) {
        console.warn(
          `No series data found for ${season} ${x.title} (Id: ${x.id})`
        );
      }

      return {
        ...x,
        ...(d || {})
      };
    });

    await writeOut(`${targetFolder}/${season}`, { season, series });
  }
};
