const { CURRENTLY_AIRING, SERIES_DATA } = require('./queries');
const { query, writeOut } = require('./utils');

module.exports = async function writeCurrentlyAiring(targetFolder) {
  const result = await query(CURRENTLY_AIRING);

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

  const date = new Date().toISOString().split('T')[0];
  await writeOut(`${targetFolder}/${date}`, {
    season: `Currently Airing`,
    date,
    series
  });
};
