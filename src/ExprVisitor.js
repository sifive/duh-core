// Generated from src/Expr.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete generic visitor for a parse tree produced by ExprParser.

function ExprVisitor() {
	antlr4.tree.ParseTreeVisitor.call(this);
	return this;
}

ExprVisitor.prototype = Object.create(antlr4.tree.ParseTreeVisitor.prototype);
ExprVisitor.prototype.constructor = ExprVisitor;

// Visit a parse tree produced by ExprParser#cond_predicate.
ExprVisitor.prototype.visitCond_predicate = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#constant_expression.
ExprVisitor.prototype.visitConstant_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#expression.
ExprVisitor.prototype.visitExpression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#mintypmax_expression.
ExprVisitor.prototype.visitMintypmax_expression = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#constant_primary.
ExprVisitor.prototype.visitConstant_primary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#primary.
ExprVisitor.prototype.visitPrimary = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#primary_literal.
ExprVisitor.prototype.visitPrimary_literal = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#constant_bit_select.
ExprVisitor.prototype.visitConstant_bit_select = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#unary_operator.
ExprVisitor.prototype.visitUnary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#binary_operator.
ExprVisitor.prototype.visitBinary_operator = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#number.
ExprVisitor.prototype.visitNumber = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#integral_number.
ExprVisitor.prototype.visitIntegral_number = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#hierarchical_identifier.
ExprVisitor.prototype.visitHierarchical_identifier = function(ctx) {
  return this.visitChildren(ctx);
};


// Visit a parse tree produced by ExprParser#identifier.
ExprVisitor.prototype.visitIdentifier = function(ctx) {
  return this.visitChildren(ctx);
};



exports.ExprVisitor = ExprVisitor;