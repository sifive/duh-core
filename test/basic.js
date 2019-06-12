'use strict';

const chai = require('chai');
const lib = require('../lib/index.js');

const expect = chai.expect;

describe('basic', () => {
  it('readDuh', done => {
    lib.readDuh({filename: 'package.json'}).then(val => {
      expect(val).to.be.an('object');
      done();
    });
  });
  it('expandAll', done => {
    lib.expandAll({}).then(val => {
      expect(val).to.be.an('object');
      done();
    });
  });
});

/* eslint-env mocha */
