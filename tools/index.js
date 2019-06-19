const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const argv = require('minimist')(process.argv.slice(2));
const dotenv = require('dotenv');
dotenv.config();

const { SEASON_LIST, SERIES_DATA } = require('./queries');

const MATCH_YYYY_MM = /^\d{4}-\d{2}$/;

async function query(query, variables) {
  try {
    const response = await fetch(process.env.API_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        query,
        variables
      })
    });

    const result = await response.json();

    if (result.errors) {
      const error = result.errors[0];
      console.log(`Bad Response.\n\r${error.message}`);
      process.exit(1);
    }

    // Query resolve names are being aliased to 'value'
    return result.data.value;
  } catch (e) {
    console.log(`Fetch failed.\n\r${e.message}`);
    process.exit(1);
  }
}

function writeOut(season, data) {
  const fileName = path.resolve(
    path.join(__dirname, `./output/${season}.json`)
  );

  return new Promise((resolve) => {
    fs.writeFile(fileName, JSON.stringify(data, null, 2), function(err) {
      if (err) {
        console.error(`Failed to write ${fileName}`, err);
        return resolve(false);
      }

      console.log(`Successfully written ${fileName}`);
      return resolve(true);
    });
  });
}

async function run() {
  const { help, seasons } = argv;
  if (help) {
    console.log(`
       /* Example usage
        *
        * npm run generate-seasons -- --seasons 2019-07
        * npm run generate-seasons -- --seasons 2019-07,2019-04
        *
        * Args
        * --seasons     STRING  yyyy-mm,yyyy-mm
        *
        */
    `);
    process.exit(0);
  }

  const validSeasons = seasons && typeof seasons === 'string';
  const inputs = validSeasons ? seasons.split(',') : [];

  if (!validSeasons || inputs.some((x) => !x.match(MATCH_YYYY_MM))) {
    console.log('Invalid run generate-seasons attempt');
    console.log(`--seasons is required in the format yyyy-mm,yyyy-mm`);
    process.exit(0);
  }

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

    await writeOut(season, { season, series });
  }
}

run();
