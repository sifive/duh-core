// Generated from src/Expr.g4 by ANTLR 4.8
// jshint ignore: start
var antlr4 = require('antlr4/index');
var ExprListener = require('./ExprListener').ExprListener;
var ExprVisitor = require('./ExprVisitor').ExprVisitor;

var grammarFileName = "Expr.g4";


var serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964",
    "\u0003/\u0086\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004\t",
    "\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007\t\u0007\u0004",
    "\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004\f\t\f\u0004",
    "\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0003\u0002\u0003\u0002",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0005\u0003",
    "&\n\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0007\u0003",
    "2\n\u0003\f\u0003\u000e\u00035\u000b\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0005\u0004<\n\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003\u0004\u0003",
    "\u0004\u0003\u0004\u0003\u0004\u0007\u0004H\n\u0004\f\u0004\u000e\u0004",
    "K\u000b\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0003\u0005\u0003",
    "\u0005\u0003\u0005\u0003\u0005\u0005\u0005T\n\u0005\u0003\u0006\u0003",
    "\u0006\u0005\u0006X\n\u0006\u0003\u0007\u0003\u0007\u0003\u0007\u0003",
    "\u0007\u0003\u0007\u0003\u0007\u0005\u0007`\n\u0007\u0003\b\u0003\b",
    "\u0003\t\u0003\t\u0003\t\u0003\t\u0007\th\n\t\f\t\u000e\tk\u000b\t\u0003",
    "\n\u0003\n\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\r\u0003\r\u0003",
    "\u000e\u0003\u000e\u0005\u000ew\n\u000e\u0003\u000e\u0003\u000e\u0003",
    "\u000e\u0003\u000e\u0007\u000e}\n\u000e\f\u000e\u000e\u000e\u0080\u000b",
    "\u000e\u0003\u000e\u0003\u000e\u0003\u000f\u0003\u000f\u0003\u000f\u0002",
    "\u0004\u0004\u0006\u0010\u0002\u0004\u0006\b\n\f\u000e\u0010\u0012\u0014",
    "\u0016\u0018\u001a\u001c\u0002\u0005\u0003\u0002\n\u0014\u0006\u0002",
    "\n\u000b\u000e\u000e\u0010\u0010\u0012$\u0003\u0002\'*\u0002\u0084\u0002",
    "\u001e\u0003\u0002\u0002\u0002\u0004%\u0003\u0002\u0002\u0002\u0006",
    ";\u0003\u0002\u0002\u0002\bS\u0003\u0002\u0002\u0002\nW\u0003\u0002",
    "\u0002\u0002\f_\u0003\u0002\u0002\u0002\u000ea\u0003\u0002\u0002\u0002",
    "\u0010i\u0003\u0002\u0002\u0002\u0012l\u0003\u0002\u0002\u0002\u0014",
    "n\u0003\u0002\u0002\u0002\u0016p\u0003\u0002\u0002\u0002\u0018r\u0003",
    "\u0002\u0002\u0002\u001av\u0003\u0002\u0002\u0002\u001c\u0083\u0003",
    "\u0002\u0002\u0002\u001e\u001f\u0005\u0006\u0004\u0002\u001f\u0003\u0003",
    "\u0002\u0002\u0002 !\b\u0003\u0001\u0002!&\u0005\n\u0006\u0002\"#\u0005",
    "\u0012\n\u0002#$\u0005\n\u0006\u0002$&\u0003\u0002\u0002\u0002% \u0003",
    "\u0002\u0002\u0002%\"\u0003\u0002\u0002\u0002&3\u0003\u0002\u0002\u0002",
    "\'(\f\u0004\u0002\u0002()\u0005\u0014\u000b\u0002)*\u0005\u0004\u0003",
    "\u0005*2\u0003\u0002\u0002\u0002+,\f\u0003\u0002\u0002,-\u0007\u0003",
    "\u0002\u0002-.\u0005\u0004\u0003\u0002./\u0007\u0004\u0002\u0002/0\u0005",
    "\u0004\u0003\u000402\u0003\u0002\u0002\u00021\'\u0003\u0002\u0002\u0002",
    "1+\u0003\u0002\u0002\u000225\u0003\u0002\u0002\u000231\u0003\u0002\u0002",
    "\u000234\u0003\u0002\u0002\u00024\u0005\u0003\u0002\u0002\u000253\u0003",
    "\u0002\u0002\u000267\b\u0004\u0001\u00027<\u0005\f\u0007\u000289\u0005",
    "\u0012\n\u00029:\u0005\f\u0007\u0002:<\u0003\u0002\u0002\u0002;6\u0003",
    "\u0002\u0002\u0002;8\u0003\u0002\u0002\u0002<I\u0003\u0002\u0002\u0002",
    "=>\f\u0004\u0002\u0002>?\u0005\u0014\u000b\u0002?@\u0005\u0006\u0004",
    "\u0005@H\u0003\u0002\u0002\u0002AB\f\u0003\u0002\u0002BC\u0007\u0003",
    "\u0002\u0002CD\u0005\u0006\u0004\u0002DE\u0007\u0004\u0002\u0002EF\u0005",
    "\u0006\u0004\u0004FH\u0003\u0002\u0002\u0002G=\u0003\u0002\u0002\u0002",
    "GA\u0003\u0002\u0002\u0002HK\u0003\u0002\u0002\u0002IG\u0003\u0002\u0002",
    "\u0002IJ\u0003\u0002\u0002\u0002J\u0007\u0003\u0002\u0002\u0002KI\u0003",
    "\u0002\u0002\u0002LT\u0005\u0006\u0004\u0002MN\u0005\u0006\u0004\u0002",
    "NO\u0007\u0004\u0002\u0002OP\u0005\u0006\u0004\u0002PQ\u0007\u0004\u0002",
    "\u0002QR\u0005\u0006\u0004\u0002RT\u0003\u0002\u0002\u0002SL\u0003\u0002",
    "\u0002\u0002SM\u0003\u0002\u0002\u0002T\t\u0003\u0002\u0002\u0002UX",
    "\u0005\u000e\b\u0002VX\u0007\u0005\u0002\u0002WU\u0003\u0002\u0002\u0002",
    "WV\u0003\u0002\u0002\u0002X\u000b\u0003\u0002\u0002\u0002Y`\u0005\u000e",
    "\b\u0002Z`\u0005\u001a\u000e\u0002[\\\u0007\u0006\u0002\u0002\\]\u0005",
    "\b\u0005\u0002]^\u0007\u0007\u0002\u0002^`\u0003\u0002\u0002\u0002_",
    "Y\u0003\u0002\u0002\u0002_Z\u0003\u0002\u0002\u0002_[\u0003\u0002\u0002",
    "\u0002`\r\u0003\u0002\u0002\u0002ab\u0005\u0016\f\u0002b\u000f\u0003",
    "\u0002\u0002\u0002cd\u0007\b\u0002\u0002de\u0005\u0004\u0003\u0002e",
    "f\u0007\t\u0002\u0002fh\u0003\u0002\u0002\u0002gc\u0003\u0002\u0002",
    "\u0002hk\u0003\u0002\u0002\u0002ig\u0003\u0002\u0002\u0002ij\u0003\u0002",
    "\u0002\u0002j\u0011\u0003\u0002\u0002\u0002ki\u0003\u0002\u0002\u0002",
    "lm\t\u0002\u0002\u0002m\u0013\u0003\u0002\u0002\u0002no\t\u0003\u0002",
    "\u0002o\u0015\u0003\u0002\u0002\u0002pq\u0005\u0018\r\u0002q\u0017\u0003",
    "\u0002\u0002\u0002rs\t\u0004\u0002\u0002s\u0019\u0003\u0002\u0002\u0002",
    "tu\u0007%\u0002\u0002uw\u0007&\u0002\u0002vt\u0003\u0002\u0002\u0002",
    "vw\u0003\u0002\u0002\u0002w~\u0003\u0002\u0002\u0002xy\u0005\u001c\u000f",
    "\u0002yz\u0005\u0010\t\u0002z{\u0007&\u0002\u0002{}\u0003\u0002\u0002",
    "\u0002|x\u0003\u0002\u0002\u0002}\u0080\u0003\u0002\u0002\u0002~|\u0003",
    "\u0002\u0002\u0002~\u007f\u0003\u0002\u0002\u0002\u007f\u0081\u0003",
    "\u0002\u0002\u0002\u0080~\u0003\u0002\u0002\u0002\u0081\u0082\u0005",
    "\u001c\u000f\u0002\u0082\u001b\u0003\u0002\u0002\u0002\u0083\u0084\u0007",
    ".\u0002\u0002\u0084\u001d\u0003\u0002\u0002\u0002\u000e%13;GISW_iv~"].join("");


var atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

var decisionsToDFA = atn.decisionToState.map( function(ds, index) { return new antlr4.dfa.DFA(ds, index); });

var sharedContextCache = new antlr4.PredictionContextCache();

var literalNames = [ null, "'?'", "':'", "'null'", "'('", "')'", "'['", 
                     "']'", "'+'", "'-'", "'!'", "'~'", "'&'", "'~&'", "'|'", 
                     "'~|'", "'^'", "'~^'", "'^~'", "'*'", "'/'", "'%'", 
                     "'=='", "'!='", "'&&'", "'||'", "'**'", "'<'", "'<='", 
                     "'>'", "'>='", "'>>'", "'<<'", "'>>>'", "'<<<'", "'$root'", 
                     "'.'" ];

var symbolicNames = [ null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, null, null, null, null, null, null, null, null, 
                      null, "Decimal_number", "Binary_number", "Octal_number", 
                      "Hex_number", "Size", "Unsigned_number", "Decimal_base", 
                      "Simple_identifier", "White_space" ];

var ruleNames =  [ "cond_predicate", "constant_expression", "expression", 
                   "mintypmax_expression", "constant_primary", "primary", 
                   "primary_literal", "constant_bit_select", "unary_operator", 
                   "binary_operator", "number", "integral_number", "hierarchical_identifier", 
                   "identifier" ];

function ExprParser (input) {
	antlr4.Parser.call(this, input);
    this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
    this.ruleNames = ruleNames;
    this.literalNames = literalNames;
    this.symbolicNames = symbolicNames;
    return this;
}

ExprParser.prototype = Object.create(antlr4.Parser.prototype);
ExprParser.prototype.constructor = ExprParser;

Object.defineProperty(ExprParser.prototype, "atn", {
	get : function() {
		return atn;
	}
});

ExprParser.EOF = antlr4.Token.EOF;
ExprParser.T__0 = 1;
ExprParser.T__1 = 2;
ExprParser.T__2 = 3;
ExprParser.T__3 = 4;
ExprParser.T__4 = 5;
ExprParser.T__5 = 6;
ExprParser.T__6 = 7;
ExprParser.T__7 = 8;
ExprParser.T__8 = 9;
ExprParser.T__9 = 10;
ExprParser.T__10 = 11;
ExprParser.T__11 = 12;
ExprParser.T__12 = 13;
ExprParser.T__13 = 14;
ExprParser.T__14 = 15;
ExprParser.T__15 = 16;
ExprParser.T__16 = 17;
ExprParser.T__17 = 18;
ExprParser.T__18 = 19;
ExprParser.T__19 = 20;
ExprParser.T__20 = 21;
ExprParser.T__21 = 22;
ExprParser.T__22 = 23;
ExprParser.T__23 = 24;
ExprParser.T__24 = 25;
ExprParser.T__25 = 26;
ExprParser.T__26 = 27;
ExprParser.T__27 = 28;
ExprParser.T__28 = 29;
ExprParser.T__29 = 30;
ExprParser.T__30 = 31;
ExprParser.T__31 = 32;
ExprParser.T__32 = 33;
ExprParser.T__33 = 34;
ExprParser.T__34 = 35;
ExprParser.T__35 = 36;
ExprParser.Decimal_number = 37;
ExprParser.Binary_number = 38;
ExprParser.Octal_number = 39;
ExprParser.Hex_number = 40;
ExprParser.Size = 41;
ExprParser.Unsigned_number = 42;
ExprParser.Decimal_base = 43;
ExprParser.Simple_identifier = 44;
ExprParser.White_space = 45;

ExprParser.RULE_cond_predicate = 0;
ExprParser.RULE_constant_expression = 1;
ExprParser.RULE_expression = 2;
ExprParser.RULE_mintypmax_expression = 3;
ExprParser.RULE_constant_primary = 4;
ExprParser.RULE_primary = 5;
ExprParser.RULE_primary_literal = 6;
ExprParser.RULE_constant_bit_select = 7;
ExprParser.RULE_unary_operator = 8;
ExprParser.RULE_binary_operator = 9;
ExprParser.RULE_number = 10;
ExprParser.RULE_integral_number = 11;
ExprParser.RULE_hierarchical_identifier = 12;
ExprParser.RULE_identifier = 13;


function Cond_predicateContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_cond_predicate;
    return this;
}

Cond_predicateContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Cond_predicateContext.prototype.constructor = Cond_predicateContext;

Cond_predicateContext.prototype.expression = function() {
    return this.getTypedRuleContext(ExpressionContext,0);
};

Cond_predicateContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterCond_predicate(this);
	}
};

Cond_predicateContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitCond_predicate(this);
	}
};

Cond_predicateContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitCond_predicate(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Cond_predicateContext = Cond_predicateContext;

ExprParser.prototype.cond_predicate = function() {

    var localctx = new Cond_predicateContext(this, this._ctx, this.state);
    this.enterRule(localctx, 0, ExprParser.RULE_cond_predicate);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 28;
        this.expression(0);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Constant_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_constant_expression;
    return this;
}

Constant_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constant_expressionContext.prototype.constructor = Constant_expressionContext;

Constant_expressionContext.prototype.constant_primary = function() {
    return this.getTypedRuleContext(Constant_primaryContext,0);
};

Constant_expressionContext.prototype.unary_operator = function() {
    return this.getTypedRuleContext(Unary_operatorContext,0);
};

Constant_expressionContext.prototype.constant_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Constant_expressionContext);
    } else {
        return this.getTypedRuleContext(Constant_expressionContext,i);
    }
};

Constant_expressionContext.prototype.binary_operator = function() {
    return this.getTypedRuleContext(Binary_operatorContext,0);
};

Constant_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterConstant_expression(this);
	}
};

Constant_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitConstant_expression(this);
	}
};

Constant_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitConstant_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.constant_expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new Constant_expressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 2;
    this.enterRecursionRule(localctx, 2, ExprParser.RULE_constant_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 35;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.T__2:
        case ExprParser.Decimal_number:
        case ExprParser.Binary_number:
        case ExprParser.Octal_number:
        case ExprParser.Hex_number:
            this.state = 31;
            this.constant_primary();
            break;
        case ExprParser.T__7:
        case ExprParser.T__8:
        case ExprParser.T__9:
        case ExprParser.T__10:
        case ExprParser.T__11:
        case ExprParser.T__12:
        case ExprParser.T__13:
        case ExprParser.T__14:
        case ExprParser.T__15:
        case ExprParser.T__16:
        case ExprParser.T__17:
            this.state = 32;
            this.unary_operator();
            this.state = 33;
            this.constant_primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 49;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,2,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 47;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new Constant_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_constant_expression);
                    this.state = 37;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 38;
                    this.binary_operator();
                    this.state = 39;
                    this.constant_expression(3);
                    break;

                case 2:
                    localctx = new Constant_expressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_constant_expression);
                    this.state = 41;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 42;
                    this.match(ExprParser.T__0);
                    this.state = 43;
                    this.constant_expression(0);
                    this.state = 44;
                    this.match(ExprParser.T__1);
                    this.state = 45;
                    this.constant_expression(2);
                    break;

                } 
            }
            this.state = 51;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,2,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function ExpressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_expression;
    return this;
}

ExpressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
ExpressionContext.prototype.constructor = ExpressionContext;

ExpressionContext.prototype.primary = function() {
    return this.getTypedRuleContext(PrimaryContext,0);
};

ExpressionContext.prototype.unary_operator = function() {
    return this.getTypedRuleContext(Unary_operatorContext,0);
};

ExpressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

ExpressionContext.prototype.binary_operator = function() {
    return this.getTypedRuleContext(Binary_operatorContext,0);
};

ExpressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterExpression(this);
	}
};

ExpressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitExpression(this);
	}
};

ExpressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitExpression(this);
    } else {
        return visitor.visitChildren(this);
    }
};



ExprParser.prototype.expression = function(_p) {
	if(_p===undefined) {
	    _p = 0;
	}
    var _parentctx = this._ctx;
    var _parentState = this.state;
    var localctx = new ExpressionContext(this, this._ctx, _parentState);
    var _prevctx = localctx;
    var _startState = 4;
    this.enterRecursionRule(localctx, 4, ExprParser.RULE_expression, _p);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 57;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.T__3:
        case ExprParser.T__34:
        case ExprParser.Decimal_number:
        case ExprParser.Binary_number:
        case ExprParser.Octal_number:
        case ExprParser.Hex_number:
        case ExprParser.Simple_identifier:
            this.state = 53;
            this.primary();
            break;
        case ExprParser.T__7:
        case ExprParser.T__8:
        case ExprParser.T__9:
        case ExprParser.T__10:
        case ExprParser.T__11:
        case ExprParser.T__12:
        case ExprParser.T__13:
        case ExprParser.T__14:
        case ExprParser.T__15:
        case ExprParser.T__16:
        case ExprParser.T__17:
            this.state = 54;
            this.unary_operator();
            this.state = 55;
            this.primary();
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
        this._ctx.stop = this._input.LT(-1);
        this.state = 71;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,5,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                if(this._parseListeners!==null) {
                    this.triggerExitRuleEvent();
                }
                _prevctx = localctx;
                this.state = 69;
                this._errHandler.sync(this);
                var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
                switch(la_) {
                case 1:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 59;
                    if (!( this.precpred(this._ctx, 2))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 2)");
                    }
                    this.state = 60;
                    this.binary_operator();
                    this.state = 61;
                    this.expression(3);
                    break;

                case 2:
                    localctx = new ExpressionContext(this, _parentctx, _parentState);
                    this.pushNewRecursionContext(localctx, _startState, ExprParser.RULE_expression);
                    this.state = 63;
                    if (!( this.precpred(this._ctx, 1))) {
                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 1)");
                    }
                    this.state = 64;
                    this.match(ExprParser.T__0);
                    this.state = 65;
                    this.expression(0);
                    this.state = 66;
                    this.match(ExprParser.T__1);
                    this.state = 67;
                    this.expression(2);
                    break;

                } 
            }
            this.state = 73;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,5,this._ctx);
        }

    } catch( error) {
        if(error instanceof antlr4.error.RecognitionException) {
	        localctx.exception = error;
	        this._errHandler.reportError(this, error);
	        this._errHandler.recover(this, error);
	    } else {
	    	throw error;
	    }
    } finally {
        this.unrollRecursionContexts(_parentctx)
    }
    return localctx;
};


function Mintypmax_expressionContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_mintypmax_expression;
    return this;
}

Mintypmax_expressionContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Mintypmax_expressionContext.prototype.constructor = Mintypmax_expressionContext;

Mintypmax_expressionContext.prototype.expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(ExpressionContext);
    } else {
        return this.getTypedRuleContext(ExpressionContext,i);
    }
};

Mintypmax_expressionContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterMintypmax_expression(this);
	}
};

Mintypmax_expressionContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitMintypmax_expression(this);
	}
};

Mintypmax_expressionContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitMintypmax_expression(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Mintypmax_expressionContext = Mintypmax_expressionContext;

ExprParser.prototype.mintypmax_expression = function() {

    var localctx = new Mintypmax_expressionContext(this, this._ctx, this.state);
    this.enterRule(localctx, 6, ExprParser.RULE_mintypmax_expression);
    try {
        this.state = 81;
        this._errHandler.sync(this);
        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
        switch(la_) {
        case 1:
            this.enterOuterAlt(localctx, 1);
            this.state = 74;
            this.expression(0);
            break;

        case 2:
            this.enterOuterAlt(localctx, 2);
            this.state = 75;
            this.expression(0);
            this.state = 76;
            this.match(ExprParser.T__1);
            this.state = 77;
            this.expression(0);
            this.state = 78;
            this.match(ExprParser.T__1);
            this.state = 79;
            this.expression(0);
            break;

        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Constant_primaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_constant_primary;
    return this;
}

Constant_primaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constant_primaryContext.prototype.constructor = Constant_primaryContext;

Constant_primaryContext.prototype.primary_literal = function() {
    return this.getTypedRuleContext(Primary_literalContext,0);
};

Constant_primaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterConstant_primary(this);
	}
};

Constant_primaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitConstant_primary(this);
	}
};

Constant_primaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitConstant_primary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Constant_primaryContext = Constant_primaryContext;

ExprParser.prototype.constant_primary = function() {

    var localctx = new Constant_primaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 8, ExprParser.RULE_constant_primary);
    try {
        this.state = 85;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.Decimal_number:
        case ExprParser.Binary_number:
        case ExprParser.Octal_number:
        case ExprParser.Hex_number:
            this.enterOuterAlt(localctx, 1);
            this.state = 83;
            this.primary_literal();
            break;
        case ExprParser.T__2:
            this.enterOuterAlt(localctx, 2);
            this.state = 84;
            this.match(ExprParser.T__2);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function PrimaryContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_primary;
    return this;
}

PrimaryContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
PrimaryContext.prototype.constructor = PrimaryContext;

PrimaryContext.prototype.primary_literal = function() {
    return this.getTypedRuleContext(Primary_literalContext,0);
};

PrimaryContext.prototype.hierarchical_identifier = function() {
    return this.getTypedRuleContext(Hierarchical_identifierContext,0);
};

PrimaryContext.prototype.mintypmax_expression = function() {
    return this.getTypedRuleContext(Mintypmax_expressionContext,0);
};

PrimaryContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterPrimary(this);
	}
};

PrimaryContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitPrimary(this);
	}
};

PrimaryContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitPrimary(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.PrimaryContext = PrimaryContext;

ExprParser.prototype.primary = function() {

    var localctx = new PrimaryContext(this, this._ctx, this.state);
    this.enterRule(localctx, 10, ExprParser.RULE_primary);
    try {
        this.state = 93;
        this._errHandler.sync(this);
        switch(this._input.LA(1)) {
        case ExprParser.Decimal_number:
        case ExprParser.Binary_number:
        case ExprParser.Octal_number:
        case ExprParser.Hex_number:
            this.enterOuterAlt(localctx, 1);
            this.state = 87;
            this.primary_literal();
            break;
        case ExprParser.T__34:
        case ExprParser.Simple_identifier:
            this.enterOuterAlt(localctx, 2);
            this.state = 88;
            this.hierarchical_identifier();
            break;
        case ExprParser.T__3:
            this.enterOuterAlt(localctx, 3);
            this.state = 89;
            this.match(ExprParser.T__3);
            this.state = 90;
            this.mintypmax_expression();
            this.state = 91;
            this.match(ExprParser.T__4);
            break;
        default:
            throw new antlr4.error.NoViableAltException(this);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Primary_literalContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_primary_literal;
    return this;
}

Primary_literalContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Primary_literalContext.prototype.constructor = Primary_literalContext;

Primary_literalContext.prototype.number = function() {
    return this.getTypedRuleContext(NumberContext,0);
};

Primary_literalContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterPrimary_literal(this);
	}
};

Primary_literalContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitPrimary_literal(this);
	}
};

Primary_literalContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitPrimary_literal(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Primary_literalContext = Primary_literalContext;

ExprParser.prototype.primary_literal = function() {

    var localctx = new Primary_literalContext(this, this._ctx, this.state);
    this.enterRule(localctx, 12, ExprParser.RULE_primary_literal);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 95;
        this.number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Constant_bit_selectContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_constant_bit_select;
    return this;
}

Constant_bit_selectContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Constant_bit_selectContext.prototype.constructor = Constant_bit_selectContext;

Constant_bit_selectContext.prototype.constant_expression = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Constant_expressionContext);
    } else {
        return this.getTypedRuleContext(Constant_expressionContext,i);
    }
};

Constant_bit_selectContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterConstant_bit_select(this);
	}
};

Constant_bit_selectContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitConstant_bit_select(this);
	}
};

Constant_bit_selectContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitConstant_bit_select(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Constant_bit_selectContext = Constant_bit_selectContext;

ExprParser.prototype.constant_bit_select = function() {

    var localctx = new Constant_bit_selectContext(this, this._ctx, this.state);
    this.enterRule(localctx, 14, ExprParser.RULE_constant_bit_select);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 103;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while(_la===ExprParser.T__5) {
            this.state = 97;
            this.match(ExprParser.T__5);
            this.state = 98;
            this.constant_expression(0);
            this.state = 99;
            this.match(ExprParser.T__6);
            this.state = 105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Unary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_unary_operator;
    return this;
}

Unary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Unary_operatorContext.prototype.constructor = Unary_operatorContext;


Unary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterUnary_operator(this);
	}
};

Unary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitUnary_operator(this);
	}
};

Unary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitUnary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Unary_operatorContext = Unary_operatorContext;

ExprParser.prototype.unary_operator = function() {

    var localctx = new Unary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 16, ExprParser.RULE_unary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 106;
        _la = this._input.LA(1);
        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << ExprParser.T__7) | (1 << ExprParser.T__8) | (1 << ExprParser.T__9) | (1 << ExprParser.T__10) | (1 << ExprParser.T__11) | (1 << ExprParser.T__12) | (1 << ExprParser.T__13) | (1 << ExprParser.T__14) | (1 << ExprParser.T__15) | (1 << ExprParser.T__16) | (1 << ExprParser.T__17))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Binary_operatorContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_binary_operator;
    return this;
}

Binary_operatorContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Binary_operatorContext.prototype.constructor = Binary_operatorContext;


Binary_operatorContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterBinary_operator(this);
	}
};

Binary_operatorContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitBinary_operator(this);
	}
};

Binary_operatorContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitBinary_operator(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Binary_operatorContext = Binary_operatorContext;

ExprParser.prototype.binary_operator = function() {

    var localctx = new Binary_operatorContext(this, this._ctx, this.state);
    this.enterRule(localctx, 18, ExprParser.RULE_binary_operator);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 108;
        _la = this._input.LA(1);
        if(!(((((_la - 8)) & ~0x1f) == 0 && ((1 << (_la - 8)) & ((1 << (ExprParser.T__7 - 8)) | (1 << (ExprParser.T__8 - 8)) | (1 << (ExprParser.T__11 - 8)) | (1 << (ExprParser.T__13 - 8)) | (1 << (ExprParser.T__15 - 8)) | (1 << (ExprParser.T__16 - 8)) | (1 << (ExprParser.T__17 - 8)) | (1 << (ExprParser.T__18 - 8)) | (1 << (ExprParser.T__19 - 8)) | (1 << (ExprParser.T__20 - 8)) | (1 << (ExprParser.T__21 - 8)) | (1 << (ExprParser.T__22 - 8)) | (1 << (ExprParser.T__23 - 8)) | (1 << (ExprParser.T__24 - 8)) | (1 << (ExprParser.T__25 - 8)) | (1 << (ExprParser.T__26 - 8)) | (1 << (ExprParser.T__27 - 8)) | (1 << (ExprParser.T__28 - 8)) | (1 << (ExprParser.T__29 - 8)) | (1 << (ExprParser.T__30 - 8)) | (1 << (ExprParser.T__31 - 8)) | (1 << (ExprParser.T__32 - 8)) | (1 << (ExprParser.T__33 - 8)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function NumberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_number;
    return this;
}

NumberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
NumberContext.prototype.constructor = NumberContext;

NumberContext.prototype.integral_number = function() {
    return this.getTypedRuleContext(Integral_numberContext,0);
};

NumberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterNumber(this);
	}
};

NumberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitNumber(this);
	}
};

NumberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitNumber(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.NumberContext = NumberContext;

ExprParser.prototype.number = function() {

    var localctx = new NumberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 20, ExprParser.RULE_number);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 110;
        this.integral_number();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Integral_numberContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_integral_number;
    return this;
}

Integral_numberContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Integral_numberContext.prototype.constructor = Integral_numberContext;

Integral_numberContext.prototype.Decimal_number = function() {
    return this.getToken(ExprParser.Decimal_number, 0);
};

Integral_numberContext.prototype.Octal_number = function() {
    return this.getToken(ExprParser.Octal_number, 0);
};

Integral_numberContext.prototype.Binary_number = function() {
    return this.getToken(ExprParser.Binary_number, 0);
};

Integral_numberContext.prototype.Hex_number = function() {
    return this.getToken(ExprParser.Hex_number, 0);
};

Integral_numberContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterIntegral_number(this);
	}
};

Integral_numberContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitIntegral_number(this);
	}
};

Integral_numberContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitIntegral_number(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Integral_numberContext = Integral_numberContext;

ExprParser.prototype.integral_number = function() {

    var localctx = new Integral_numberContext(this, this._ctx, this.state);
    this.enterRule(localctx, 22, ExprParser.RULE_integral_number);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 112;
        _la = this._input.LA(1);
        if(!(((((_la - 37)) & ~0x1f) == 0 && ((1 << (_la - 37)) & ((1 << (ExprParser.Decimal_number - 37)) | (1 << (ExprParser.Binary_number - 37)) | (1 << (ExprParser.Octal_number - 37)) | (1 << (ExprParser.Hex_number - 37)))) !== 0))) {
        this._errHandler.recoverInline(this);
        }
        else {
        	this._errHandler.reportMatch(this);
            this.consume();
        }
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function Hierarchical_identifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_hierarchical_identifier;
    return this;
}

Hierarchical_identifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
Hierarchical_identifierContext.prototype.constructor = Hierarchical_identifierContext;

Hierarchical_identifierContext.prototype.identifier = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(IdentifierContext);
    } else {
        return this.getTypedRuleContext(IdentifierContext,i);
    }
};

Hierarchical_identifierContext.prototype.constant_bit_select = function(i) {
    if(i===undefined) {
        i = null;
    }
    if(i===null) {
        return this.getTypedRuleContexts(Constant_bit_selectContext);
    } else {
        return this.getTypedRuleContext(Constant_bit_selectContext,i);
    }
};

Hierarchical_identifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterHierarchical_identifier(this);
	}
};

Hierarchical_identifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitHierarchical_identifier(this);
	}
};

Hierarchical_identifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitHierarchical_identifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.Hierarchical_identifierContext = Hierarchical_identifierContext;

ExprParser.prototype.hierarchical_identifier = function() {

    var localctx = new Hierarchical_identifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 24, ExprParser.RULE_hierarchical_identifier);
    var _la = 0; // Token type
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 116;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if(_la===ExprParser.T__34) {
            this.state = 114;
            this.match(ExprParser.T__34);
            this.state = 115;
            this.match(ExprParser.T__35);
        }

        this.state = 124;
        this._errHandler.sync(this);
        var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
            if(_alt===1) {
                this.state = 118;
                this.identifier();
                this.state = 119;
                this.constant_bit_select();
                this.state = 120;
                this.match(ExprParser.T__35); 
            }
            this.state = 126;
            this._errHandler.sync(this);
            _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
        }

        this.state = 127;
        this.identifier();
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


function IdentifierContext(parser, parent, invokingState) {
	if(parent===undefined) {
	    parent = null;
	}
	if(invokingState===undefined || invokingState===null) {
		invokingState = -1;
	}
	antlr4.ParserRuleContext.call(this, parent, invokingState);
    this.parser = parser;
    this.ruleIndex = ExprParser.RULE_identifier;
    return this;
}

IdentifierContext.prototype = Object.create(antlr4.ParserRuleContext.prototype);
IdentifierContext.prototype.constructor = IdentifierContext;

IdentifierContext.prototype.Simple_identifier = function() {
    return this.getToken(ExprParser.Simple_identifier, 0);
};

IdentifierContext.prototype.enterRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.enterIdentifier(this);
	}
};

IdentifierContext.prototype.exitRule = function(listener) {
    if(listener instanceof ExprListener ) {
        listener.exitIdentifier(this);
	}
};

IdentifierContext.prototype.accept = function(visitor) {
    if ( visitor instanceof ExprVisitor ) {
        return visitor.visitIdentifier(this);
    } else {
        return visitor.visitChildren(this);
    }
};




ExprParser.IdentifierContext = IdentifierContext;

ExprParser.prototype.identifier = function() {

    var localctx = new IdentifierContext(this, this._ctx, this.state);
    this.enterRule(localctx, 26, ExprParser.RULE_identifier);
    try {
        this.enterOuterAlt(localctx, 1);
        this.state = 129;
        this.match(ExprParser.Simple_identifier);
    } catch (re) {
    	if(re instanceof antlr4.error.RecognitionException) {
	        localctx.exception = re;
	        this._errHandler.reportError(this, re);
	        this._errHandler.recover(this, re);
	    } else {
	    	throw re;
	    }
    } finally {
        this.exitRule();
    }
    return localctx;
};


ExprParser.prototype.sempred = function(localctx, ruleIndex, predIndex) {
	switch(ruleIndex) {
	case 1:
			return this.constant_expression_sempred(localctx, predIndex);
	case 2:
			return this.expression_sempred(localctx, predIndex);
    default:
        throw "No predicate with index:" + ruleIndex;
   }
};

ExprParser.prototype.constant_expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 0:
			return this.precpred(this._ctx, 2);
		case 1:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};

ExprParser.prototype.expression_sempred = function(localctx, predIndex) {
	switch(predIndex) {
		case 2:
			return this.precpred(this._ctx, 2);
		case 3:
			return this.precpred(this._ctx, 1);
		default:
			throw "No predicate with index:" + predIndex;
	}
};


exports.ExprParser = ExprParser;
