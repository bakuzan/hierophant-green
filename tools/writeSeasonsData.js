const { FETCH_SEASON } = require('./queries');
const { query, writeOut } = require('./utils');

module.exports = async function writeSeasonsData(inputs, targetFolder) {
  for (let season of inputs) {
    let result = await query(FETCH_SEASON, {
      season
    });

    result.episodes = result.episodes.map((x) => ({
      ...x,
      date: new Date(x.date).toISOString()
    }));

    await writeOut(`${targetFolder}/${season}`, result);
  }
};
