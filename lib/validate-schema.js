'use strict';

const Ajv = require('ajv');
const schema = require('duh-schema');

module.exports = duh => new Promise((resolve, reject) => {
  const ajv = new Ajv;
  const validate = ajv
    .addSchema(schema.defs)
    .compile(schema.any);
  if (validate(duh)) {
    resolve(duh);
  } else {
    reject(validate.errors);
  }
});
