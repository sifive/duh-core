'use strict';

const {ExprVisitor} = require('../src/ExprVisitor.js');

module.exports = class Visitor extends ExprVisitor {
  constructor() {
    super();
  }
  visitHierarchical_identifier (ctx) {
    return {type: 'Identifier', name: ctx.getText()};
  }
  visitNumber (ctx) {
    return {type: 'Literal', value: Number(ctx.getText())};
  }
  visitPrimary_literal (ctx) {
    const children = this.visitChildren(ctx);
    return children[0];
  }
  visitBinary_operator (ctx) {
    return {type: 'BinaryExpression', operator: ctx.getText()};
  }
  visitUnary_operator (ctx) {
    return {type: 'UnaryExpression', operator: ctx.getText()};
  }
  visitPrimary (ctx) {
    const children = this.visitChildren(ctx);
    if (children.length === 1) {
      return children[0];
    }
    if (children.length === 3) {
      return children[1];
    }
  }
  visitTerm (ctx) {
    const children = this.visitChildren(ctx);
    if (children.length === 2) {
      return Object.assign(children[0], {argument: children[1]});
    }
    return children[0];
  }
  visitMintypmax_expression (ctx) {
    const children = this.visitChildren(ctx);
    if (children.length === 1) {
      return children[0];
    }
    return children;
  }
  visitExpression (ctx) {
    const children = this.visitChildren(ctx);
    if (children.length === 1) {
      return children[0];
    }
    if (children.length === 2) {
      return Object.assign(children[0], {argument: children[1]});
    }
    if (children.length === 3) {
      return Object.assign(children[1], {
        left: children[0],
        right: children[2]
      });
    }
  }
};
