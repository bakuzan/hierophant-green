const { createClient } = require('medea');
const dotenv = require('dotenv');
dotenv.config();

const writeSeasonsData = require('./writeSeasonsData');
const { readSeasonsData } = require('./utils');

const MATCH_YYYY_MM = /^\d{4}-\d{2}$/;

async function run() {
  const windowColumns = process.stdout.columns || 80;

  const cli = createClient('Hierophant Green', {
    windowColumns
  })
    .addOption({
      option: 'help',
      description: 'Have the client output the help text'
    })
    .addOption({
      option: 'seasons',
      shortcut: 's',
      description:
        'Creates Data files for a list of seasons (format: yyyy-mm,yyyy-mm)',
      validate: (_, seasons) => {
        if (!seasons) {
          return false;
        } else if (typeof seasons !== 'string') {
          return false;
        }

        return seasons.split(',').every((x) => x.match(MATCH_YYYY_MM));
      }
    })
    .addOption({
      option: 'update',
      shortcut: 'u',
      description: 'Update seasons as required'
    })
    .welcome()
    .parse(process.argv);

  if (!cli.any() || cli.has('help')) {
    cli.helpText();
    process.exit(0);
  }

  const update = cli.get('update', false);

  if (update) {
    console.log(`Updating seasons...`);

    const toUpdate = await readSeasonsData();

    if (!toUpdate.length) {
      console.log('Everything is update to date.');
      process.exit(0);
    }

    await writeSeasonsData(toUpdate, `../data`);
    process.exit(0);
  }

  if (cli.has('seasons') && cli.validate('seasons')) {
    console.log(`Writing new seasons...`);

    const inputs = cli.get('seasons').split(',');
    await writeSeasonsData(inputs, `../data`);
    process.exit(0);
  }

  console.log('Invalid cli run.');
  console.log('Run without args to get help.');
}

run();
