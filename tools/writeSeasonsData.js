const { FETCH_SEASON } = require('./queries');
const { query, writeOut } = require('./utils');

module.exports = async function writeSeasonsData(inputs, targetFolder) {
  for (let season of inputs) {
    const result = await query(FETCH_SEASON, {
      season
    });

    await writeOut(`${targetFolder}/${season}`, result);
  }
};
