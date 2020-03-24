'use strict';

const Ajv = require('ajv');
const schema = require('duh-schema');

const padder = (res, row) => {
  row.map((e, i) => {
    if (typeof res[i] !== 'number') {
      res[i] = 0;
    }
    res[i] = Math.max(res[i], e.toString().length);
  });
  return res;
};

const headFormat = [
  {head: '\u001b[4m', tail: '\u001b[0m '},
  {head: '\u001b[4m', tail: '\u001b[0m '},
  {head: '\u001b[4m', tail: '\u001b[0m '}
];

const bodyFormat = [
  {head: '\u001b[33;1m', tail: '\u001b[0m '},
  {head: '\u001b[34;1m', tail: '\u001b[0m '},
  {head: '\u001b[37;1m', tail: '\u001b[0m '}
];

const formatter = (fmt, widths) =>
  (res, col, i) =>
    res + fmt[i].head + col.toString().padEnd(widths[i]) + fmt[i].tail;


const logger = errors => {
  const errora = errors.map(err => [err.dataPath, err.schemaPath, err.message]);
  const widths = errora.reduce(padder, []);
  return [
    'DUH document does not match schema:',
    ['data path', 'schema path', 'message'].reduce(formatter(headFormat, widths), ''),
    errora.map(row => row.reduce(formatter(bodyFormat, widths), '')).join('\n')
  ].join('\n');
};

module.exports = duh => new Promise((resolve, reject) => {
  const ajv = new Ajv;
  const validate = ajv
    .addSchema(schema.defs)
    .compile(schema.any);
  if (validate(duh)) {
    resolve(duh);
  } else {
    // reject(validate.errors);
    reject(logger(validate.errors));
  }
});
