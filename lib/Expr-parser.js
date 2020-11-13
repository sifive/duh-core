'use strict';

const antlr4 = require('antlr4');

const {ExprLexer} = require('../src/ExprLexer.js');
const {ExprParser} = require('../src/ExprParser.js');

const Visitor = require('../lib/custom-expr-visitor.js');
// const Listener = require('./custom-expr-listener.js');

exports.parser = input => {
  const chars = new antlr4.InputStream(input);
  const lexer = new ExprLexer(chars);
  const tokens  = new antlr4.CommonTokenStream(lexer);
  const parser = new ExprParser(tokens);
  parser.buildParseTrees = true;
  const tree = parser.expression();

  // const walker = new Listener();
  // antlr4.tree.ParseTreeWalker.DEFAULT.walk(walker, tree);
  // return walker.getAST();

  return tree.accept(new Visitor());

};
