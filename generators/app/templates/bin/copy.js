#! /usr/bin/env node
/* eslint no-unused-vars: "off", no-restricted-modules: "off" */
const colors = require('colors');
const fs = require('fs-extra');
// -----------------------------------
fs.copy('node_modules/axios/dist/axios.min.js', 'dist/lib/axios.min.js')
  .then(() => console.log('=> dist/lib/axios.min.js copied!\n'.green))
  .catch(err => console.log(`ERROR: ${err}`.red));
