'use strict';

const fs = require('fs');
const path = require('path');
const sass = require('node-sass');
const CleanCss = require('clean-css');
const cpx = require('cpx');
const postcss = require('postcss');
const autoprefixer = require('autoprefixer');
const url = require('postcss-url');
const { version } = require('../libs/ngx-videogular/package.json');

const copyDir = () =>
  new Promise((resolve, reject) => {
    console.log(`Copying fonts...`);
    cpx.copy(`libs/ngx-videogular/fonts/*`, `dist/libs/ngx-videogular`, err => {
      if (err) {
        return reject(err);
      }
      resolve();
    });
  });

const compileCss = () =>
  new Promise((resolve, reject) => {
    console.log('Compiling index.css...');
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
            // .use(
            //   url([
            //     {
            //       filter: '../../fonts/**/*',
            //       url: 'copy',
            //       basePath: path.resolve(__dirname, '../dist/libs/ngx-videogular/fonts'),
            //       assetsPath: path.resolve(__dirname, '../dist/libs/ngx-videogular'),
            //       useHash: true
            //     },
            //     {
            //       filter: '../../assets/**/*',
            //       url: ({ url }) => path.basename(url),
            //       multi: true
            //     },
            //     {
            //       filter: '../fonts/**/*',
            //       url: ({ url }) => path.basename(url),
            //       multi: true
            //     }
            //   ])
            // )
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
  .then(() => {
    console.log('Done.');
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
