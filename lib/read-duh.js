'use strict';

const path = require('path');
const JSON5 = require('json5');
const jsonRefs = require('json-refs');
const get = require('lodash.get');

const fmt = {
  error: {head: '\u001b[31;1m', tail: '\u001b[0m '},
  warn:  {head: '\u001b[33;1m', tail: '\u001b[0m '},
  info:  {head: '\u001b[32;1m', tail: '\u001b[0m '}
};

const trim = text => {
  const arr = text.split('/n');
  arr.pop();
  arr.shift();
  return arr.join('/n');
};

module.exports = argv => new Promise(resolve => {
  if (argv.verbose) console.log('reading spec');
  const folderName = path.basename(process.cwd());
  const fileName = argv.filename || folderName + '.json5';
  // json dereference
  jsonRefs.resolveRefs({$ref: fileName}, {
    loaderOptions: {
      processContent: function (res, cb) {
        let ml;
        const text = (path.extname(fileName) === '.html') ? trim(res.text) : res.text;
        try {
          ml = JSON5.parse(text);
        } catch(err) {
          console.error(
            fmt.error.head + 'Error' + fmt.error.tail + err.message + ' in ' + res.location
          );
          return;
        }
        cb(undefined, ml);
      }
    }
  }).then(res => {
    const error = get(res, 'refs["#"].error');
    if (error) {
      throw new Error(error);
    }
    
    resolve(res.resolved);
  });
});
