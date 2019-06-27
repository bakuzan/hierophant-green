const { promisify } = require('util');
const fs = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const readdirAsync = promisify(fs.readdir);
const readFileAsync = promisify(fs.readFile);

const pathFix = (...strs) => path.resolve(path.join(...strs));

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
  const fileName = pathFix(__dirname, `${season}.json`);

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

async function readSeasonsData(includeAll = false) {
  const dirname = pathFix(__dirname, '..', './data');
  const filenames = await readdirAsync(dirname);
  const result = [];

  for (let filename of filenames) {
    const file = await readFileAsync(pathFix(dirname, filename), 'utf-8');
    const data = JSON.parse(file);
    const hasUnratedSeries = data.series.some((x) => x.rating === 0);

    if (includeAll || hasUnratedSeries) {
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
