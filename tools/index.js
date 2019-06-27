const argv = require('minimist')(process.argv.slice(2));
const dotenv = require('dotenv');
dotenv.config();

const writeSeasonsData = require('./writeSeasonsData');
const { readSeasonsData } = require('./utils');

const MATCH_YYYY_MM = /^\d{4}-\d{2}$/;

async function run() {
  console.log(`***** Hierophant Green cli *****`);
  const keys = Object.keys(argv);
  const { help } = argv;

  if (help || keys.length === 1) {
    console.log(`
    * * * * * * * * * * * * * * * * * * * * * * 
    * Options
    * * * * * * * * * * * * * * * * * * * * * * 
    *
    * --seasons  --s   STRING    yyyy-mm,yyyy-mm
    * Creates Data files for a list of seasons
    * 
    * --update   --u   BOOLEAN  
    * Update existing seasons as required
    * 
    * --all      --a   BOOLEAN 
    * Tell update to update all existing seasons
    *
    * * * * * * * * * * * * * * * * * * * * * *
    `);
    process.exit(0);
  }

  const update = argv.update || argv.u || false;

  if (update) {
    const includeAll = argv.all || argv.a;
    const toUpdate = await readSeasonsData(includeAll);
    console.log(`Updating ${includeAll ? 'all ' : ''}seasons...`);

    await writeSeasonsData(toUpdate, `../data`);
    process.exit(0);
  }

  const seasons = argv.seasons || argv.s;
  const validSeasons = seasons && typeof seasons === 'string';
  const inputs = validSeasons ? seasons.split(',') : [];

  if (!validSeasons || inputs.some((x) => !x.match(MATCH_YYYY_MM))) {
    console.log('Invalid run generate-seasons attempt');
    console.log(`--seasons is required in the format yyyy-mm,yyyy-mm`);
    process.exit(0);
  }

  console.log(`Writing new seasons...`);
  await writeSeasonsData(inputs, `./output`);
}

run();
