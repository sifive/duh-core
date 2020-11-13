'use strict';

const chai = require('chai');
const dut = require('../lib/Expr-parser.js');

const expect = chai.expect;

const testo = {
  'foo': {
    type: 'Identifier', name: 'foo'
  },
  '42': {
    type: 'Literal', value: 42
  },
  'foo == 42': {
    type: 'BinaryExpression', operator: '==',
    left: {
      type: 'Identifier', name: 'foo'
    },
    right: {
      type: 'Literal', value: 42
    }
  },
  '-(8 * W)': {
    type: 'UnaryExpression', operator: '-',
    argument: {
      type: 'BinaryExpression', operator: '*',
      left:  {
        type: 'Literal', value: 8
      },
      right: {
        type: 'Identifier', name: 'W'
      }
    }
  }
};

describe('parser', () => {
  it('_ isObject', done => {
    expect(dut).to.be.an('object');
    done();
  });

  for (let key of Object.keys(testo)) {
    it(key, done => {
      const tree = dut.parser(key);
      // console.log(JSON.stringify(tree, null, 2));
      expect(tree).to.deep.eq(testo[key]);
      done();
    });
  }

});

/* eslint-env mocha */
