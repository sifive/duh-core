// Generated from src/Expr.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by ExprParser.
function ExprListener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

ExprListener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
ExprListener.prototype.constructor = ExprListener;

// Enter a parse tree produced by ExprParser#cond_predicate.
ExprListener.prototype.enterCond_predicate = function(ctx) {
};

// Exit a parse tree produced by ExprParser#cond_predicate.
ExprListener.prototype.exitCond_predicate = function(ctx) {
};


// Enter a parse tree produced by ExprParser#constant_expression.
ExprListener.prototype.enterConstant_expression = function(ctx) {
};

// Exit a parse tree produced by ExprParser#constant_expression.
ExprListener.prototype.exitConstant_expression = function(ctx) {
};


// Enter a parse tree produced by ExprParser#expression.
ExprListener.prototype.enterExpression = function(ctx) {
};

// Exit a parse tree produced by ExprParser#expression.
ExprListener.prototype.exitExpression = function(ctx) {
};


// Enter a parse tree produced by ExprParser#mintypmax_expression.
ExprListener.prototype.enterMintypmax_expression = function(ctx) {
};

// Exit a parse tree produced by ExprParser#mintypmax_expression.
ExprListener.prototype.exitMintypmax_expression = function(ctx) {
};


// Enter a parse tree produced by ExprParser#constant_primary.
ExprListener.prototype.enterConstant_primary = function(ctx) {
};

// Exit a parse tree produced by ExprParser#constant_primary.
ExprListener.prototype.exitConstant_primary = function(ctx) {
};


// Enter a parse tree produced by ExprParser#primary.
ExprListener.prototype.enterPrimary = function(ctx) {
};

// Exit a parse tree produced by ExprParser#primary.
ExprListener.prototype.exitPrimary = function(ctx) {
};


// Enter a parse tree produced by ExprParser#primary_literal.
ExprListener.prototype.enterPrimary_literal = function(ctx) {
};

// Exit a parse tree produced by ExprParser#primary_literal.
ExprListener.prototype.exitPrimary_literal = function(ctx) {
};


// Enter a parse tree produced by ExprParser#constant_bit_select.
ExprListener.prototype.enterConstant_bit_select = function(ctx) {
};

// Exit a parse tree produced by ExprParser#constant_bit_select.
ExprListener.prototype.exitConstant_bit_select = function(ctx) {
};


// Enter a parse tree produced by ExprParser#unary_operator.
ExprListener.prototype.enterUnary_operator = function(ctx) {
};

// Exit a parse tree produced by ExprParser#unary_operator.
ExprListener.prototype.exitUnary_operator = function(ctx) {
};


// Enter a parse tree produced by ExprParser#binary_operator.
ExprListener.prototype.enterBinary_operator = function(ctx) {
};

// Exit a parse tree produced by ExprParser#binary_operator.
ExprListener.prototype.exitBinary_operator = function(ctx) {
};


// Enter a parse tree produced by ExprParser#number.
ExprListener.prototype.enterNumber = function(ctx) {
};

// Exit a parse tree produced by ExprParser#number.
ExprListener.prototype.exitNumber = function(ctx) {
};


// Enter a parse tree produced by ExprParser#integral_number.
ExprListener.prototype.enterIntegral_number = function(ctx) {
};

// Exit a parse tree produced by ExprParser#integral_number.
ExprListener.prototype.exitIntegral_number = function(ctx) {
};


// Enter a parse tree produced by ExprParser#hierarchical_identifier.
ExprListener.prototype.enterHierarchical_identifier = function(ctx) {
};

// Exit a parse tree produced by ExprParser#hierarchical_identifier.
ExprListener.prototype.exitHierarchical_identifier = function(ctx) {
};


// Enter a parse tree produced by ExprParser#identifier.
ExprListener.prototype.enterIdentifier = function(ctx) {
};

// Exit a parse tree produced by ExprParser#identifier.
ExprListener.prototype.exitIdentifier = function(ctx) {
};



exports.ExprListener = ExprListener;