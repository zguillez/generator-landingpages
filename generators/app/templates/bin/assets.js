#! /usr/bin/env node
/* eslint no-unused-vars: "off", no-restricted-modules: "off" */
const colors = require('colors');
const shell = require('shelljs');
console.log(`=> copiando assets`.yellow);
shell.exec('cp -R src/static/favicon dist/');
console.log(`=> optimizando imágenes`.yellow);
shell.exec('cd src/static/ && z min -d images -l 1');
shell.exec('mv src/static/imagemin dist/images');
console.log(`=> Done!`.green);
