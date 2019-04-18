'use strict';

const chai = require('chai');
const lib = require('../lib/index.js');

const expect = chai.expect;

describe('basic', () => {
  it('readDuh', done => {
    expect(lib.readDuh).to.be.a('function');
    done();
  });
  it('expandAll', done => {
    expect(lib.expandAll).to.be.a('function');
    done();
  });
});

/* eslint-env mocha */
