'use strict';

const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');

const {validateSchema} = require('../lib');

chai.use(chaiAsPromised);
const expect = chai.expect;

const dut = {
  'empty_catalog': {catalog: {}},
  'empty_component': {component: {}},
  'component with non-unique memoryMaps': {component: {
    vendor: 'abc', library: 'l1', name: 'c1', version: '0.1.0',
    memoryMaps: [
      {name: 'a', addressBlocks: []},
      {name: 'a', addressBlocks: []}
    ]
  }}
};

/*
describe('invalid', () => {
  for (const key of Object.keys(dut)) {
    it(key, async () => {
      expect(validateSchema(dut[key])).to.eventually.throw(TypeError);
    });
  }
});
*/

/* eslint-env mocha */
