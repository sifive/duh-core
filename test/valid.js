'use strict';

const chai = require('chai');

const {validateSchema} = require('../lib');

const expect = chai.expect;

const dut = {
  'empty_catalog': {
    catalog: {
      designs: [{
        design: {
          vendor: 'ven', library: 'l1', name: 'd1', version: 'v1',
          instances: [],
          connections: []
        }
      }],
      components: []
    }
  },
  'empty_component': {
    component: {
      vendor: 'ven', library: 'l1', name: 'c1', version: 'v1',
      model: {ports: {}},
      busInterfaces: []
    }
  }
};


describe('valid', () => {

  Object.keys(dut).map(key => {

    it(key, async () => {
      expect(await validateSchema(dut[key]))
        .to.be.an('object');
    });

  });
});

/* eslint-env mocha */
