'use strict';

const fs = require('fs');
const sass = require('node-sass');
const CleanCss = require('clean-css');
const cpx = require('cpx');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const { version } = require('../libs/ngx-videogular/package.json');

const copyDir = () =>
  new Promise((resolve, reject) => {
    console.log(`Copying fonts...`);
    console.log(`1... 2... 7... 3, down to Rockefeller Street`);
    console.log(`Life is marchin' on do you feel that`);

    cpx.copy(`libs/ngx-videogular/fonts/*`, `dist/libs/ngx-videogular/fonts`, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

const compileCss = () =>
  new Promise((resolve, reject) => {
    console.log('Prefixing and minifying index.css...');

    fs.readFile('dist/libs/ngx-videogular/fonts/videogular.css', (err, data) => {
      if (err) {
        return reject(err);
      }

      sass.render(
        {
          data: `$pkgVersion:'${version}';${data}`,
          includePaths: ['dist/libs/ngx-videogular/fonts']
        },
        (err, result) => {
          if (err) {
            return reject(err);
          }

          postcss()
            .use(autoprefixer())
            .process(result.css, { from: undefined })
            .then(({ css }) => {
              const cssMinifier = new CleanCss();
              const minifiedCss = cssMinifier.minify(css).styles;
              fs.writeFile('dist/libs/ngx-videogular/fonts/videogular.css', minifiedCss, err => {
                if (err) {
                  return reject(err);
                }
                resolve();
              });
            });
        }
      );
    });
  });

Promise.all(['assets', 'styles'].map(dir => copyDir(dir)))
  .then(() => compileCss())
  .then(() => {console.log('Done! Have a great day!')})
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
