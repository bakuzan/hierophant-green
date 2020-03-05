const {
  query: medQuery,
  writeOut: medWriteOut,
  readdirAsync,
  readFileAsync,
  pathFix
} = require('medea');

async function query(query, variables) {
  try {
    const response = await medQuery(process.env.API_ENDPOINT, {
      body: JSON.stringify({
        query,
        variables
      })
    });

    if (!response.success) {
      process.exit(1);
    }

    // Query resolve names are being aliased to 'value'
    return response.data.value;
  } catch (e) {
    console.error(`Query failed.\n\r${e.message}`);
    process.exit(1);
  }
}

async function writeOut(season, data) {
  const fileName = pathFix(__dirname, `${season}.json`);
  const payload = JSON.stringify(data, null, 2);

  return await medWriteOut(fileName, payload);
}

async function readSeasonsData() {
  const dirname = pathFix(__dirname, '..', './data');
  const filenames = await readdirAsync(dirname);
  const result = [];

  for (let filename of filenames) {
    const file = await readFileAsync(pathFix(dirname, filename), 'utf-8');
    const data = JSON.parse(file);
    const hasUnratedSeries = data.series.some((x) => x.rating === 0);

    if (hasUnratedSeries) {
      result.push(data.season);
    }
  }

  return result;
}

module.exports = {
  query,
  writeOut,
  readSeasonsData
};
