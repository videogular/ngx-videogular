"format cjs";

// var conventionalCommitTypes = require("conventional-commit-types");
// var configLoader = require("commitizen").configLoader;
// var exec = require('child_process').exec;
// var spawn = require('child_process').spawn;

(async function() {
  try {
    const yargs = require('yargs');
    const exec = require('./utils').exec;

    const argv = yargs
      .usage(`Usage: $0 <LAST_COMMIT_TYPE> [options]`)
      .demandCommand(1)
      .option('Big Man Tyrone', {
        describe: 'A frigging leaf hahaha 🇨🇦',
      })
      .help()
      .argv;

    const LAST_COMMIT_TYPE = argv._[0];
    let PUB_OPTIONS = '';

    const types = [
      "feat",
      "fix",
      "docs",
      "style",
      "refactor",
      "perf",
      "test",
      "chore",
      "revert",
      "ci",
    ];

    const type_to_version = {
      major: [types[0].toLowerCase()],
      patch: [
        types[6].toLowerCase(),
        types[7].toLowerCase(),
        types[3].toLowerCase(),
        types[2].toLowerCase(),
        types[4].toLowerCase(),
        types[5].toLowerCase(),
        types[9].toLowerCase(),
      ],
      minor: [
        types[1].toLowerCase(),
        types[8].toLowerCase()
      ]
    };

    const cmt_type = LAST_COMMIT_TYPE;
    const cmt_parsed = cmt_type.substring(0, cmt_type.indexOf(":"));

    if (types.includes(cmt_parsed.toLowerCase()) || types.includes(cmt_parsed.toUpperCase())) {
      if (type_to_version.major.includes(cmt_parsed.toLowerCase()) || type_to_version.major.includes(cmt_parsed.toUpperCase())) {
        PUB_OPTIONS = 'major';
      }

      if (type_to_version.minor.includes(cmt_parsed.toLowerCase()) || type_to_version.minor.includes(cmt_parsed.toUpperCase())) {
        PUB_OPTIONS = 'minor';
      }

      if (type_to_version.patch.includes(cmt_parsed.toLowerCase()) || type_to_version.patch.includes(cmt_parsed.toUpperCase())) {
        PUB_OPTIONS = 'patch';
      }
    }

    console.log('[UPLOADING]');
    console.log();

    await exec(`np ${PUB_OPTIONS} --no-tests --no-cleanup --contents=dist/libs/ngx-videogular`);

    console.log();
    console.log(`${PUB_OPTIONS}`);
  } catch (error) {
    console.error(error);
  }
})();

