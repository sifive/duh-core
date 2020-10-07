'use strict';

const chai = require('chai');

const {designComponent, validateSchema} = require('../lib');

const expect = chai.expect;

const dut = {
  empty: {
    catalog: {
      designs: [{
        design: {
          vendor: 'ven', library: 'l1', name: 'd1', version: 'v1',
          instances: [],
          connections: []
        }
      }],
      components: []
    },
    result: {
      vendor: 'ven', library: 'l1', name: 'd1', version: 'v1',
      model: {ports: {}},
      busInterfaces: []
    }
  },
  simple: {
    catalog: {
      designs: [{
        design: {
          vendor: 'ven', library: 'l1', name: 'd1', version: 'v1',
          instances: [
            {name: 'u0', ref: {vendor: 'ven', library: 'l1', name: 'c1', version: 'v1'}},
            {name: 'u1', ref: {vendor: 'ven', library: 'l1', name: 'c1', version: 'v1'}}
          ],
          connections: [
            {import: 'foo', target: ['u0', 't0']},
            {source: ['u0', 'i0'], target: ['u1', 't0']},
            {source: ['u1', 'i0'], export: 'bar'}
          ]
        }
      }],
      components: [
        {component: {
          vendor: 'ven', library: 'l1', name: 'c1', version: 'v1',
          model: {ports: {t0_valid: -1, i0_valid: 1}},
          busInterfaces: [{
            name: 't0', interfaceMode: 'slave',
            busType: {vendor: 'amba.com', library: 'AMBA4', name: 'AXI4Stream', version: 'r0p0_1'},
            abstractionTypes: [{viewRef: 'RTLview', portMaps: {TVALID: 't0_valid'}}]
          }, {
            name: 'i0', interfaceMode: 'master',
            busType: {vendor: 'amba.com', library: 'AMBA4', name: 'AXI4Stream', version: 'r0p0_1'},
            abstractionTypes: [{viewRef: 'RTLview', portMaps: {TVALID: 'i0_valid'}}]
          }]
        }}
      ]
    },
    result: {
      vendor: 'ven', library: 'l1', name: 'd1', version: 'v1',
      model: {ports: {foo_tvalid: -1, bar_tvalid: 1}},
      busInterfaces: [{
        name: 'foo', interfaceMode: 'slave',
        busType: {vendor: 'amba.com', library: 'AMBA4', name: 'AXI4Stream', version: 'r0p0_1'},
        abstractionTypes: [{viewRef: 'RTLview', portMaps: {TVALID: 'foo_tvalid'}}]
      }, {
        name: 'bar', interfaceMode: 'master',
        busType: {vendor: 'amba.com', library: 'AMBA4', name: 'AXI4Stream', version: 'r0p0_1'},
        abstractionTypes: [{viewRef: 'RTLview', portMaps: {TVALID: 'bar_tvalid'}}]
      }]
    }
  }
};


describe('design', () => {

  Object.keys(dut).map(key => {

    it(key + '_validate', async () => {
      expect(await validateSchema({catalog: dut[key].catalog}))
        .to.be.an('object');
      expect(await validateSchema({component: dut[key].result}))
        .to.be.an('object');
    });

    it(key + '_convert', async () => {
      const catalog = dut[key].catalog;
      expect(designComponent(catalog, catalog.designs[0].design))
        .to.deep.eq({component: dut[key].result});
    });

  });
});

/* eslint-env mocha */
