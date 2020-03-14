#! /usr/bin/env node
/* eslint no-unused-vars: "off", no-restricted-modules: "off" */
const colors = require('colors');
const mustache = require('mustache');
const zfile = require('z-file');
const partials = [
  'src/views/partials/_css.mustache',
  'src/views/partials/_js.mustache',
  'src/views/partials/_metas.mustache',
  'src/views/partials/header.mustache',
  'src/views/partials/footer.mustache'
];
zfile.reads(partials.concat([
  'src/data.json', 'src/views/index.mustache', 'src/views/partials/content.mustache'
])).then(data => {
  let html = mustache.render(`${data[6]}`, JSON.parse(data[5]), {
    _css: data[0],
    _js: data[1],
    _metas: data[2],
    header: data[3],
    footer: data[4],
    content: data[7]
  });
  zfile.write('dist/index.html', html).then(data => {
    console.log('=> archivo dist/index.html creado'.yellow);
    console.log('=> Done!'.green);
  }).catch(err => console.log(`${err}`.red));
}).catch(err => console.log(`${err}`.red));
