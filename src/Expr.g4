grammar Expr;

expression
  : term (binary_operator term | '?' expression ':' term)*
  ;

term
  : unary_operator primary
  | primary
  ;

primary
  : number
  | hierarchical_identifier
  ;

hierarchical_identifier
  : simple_hierarchical_identifier
  ;

simple_hierarchical_identifier
  : Simple_identifier ('[' Decimal_number ']')? ('.' Simple_identifier ('[' Decimal_number ']')?)*
  ;

Simple_identifier
  : [a-zA-Z_] [a-zA-Z0-9_$]*
  ;

number
  : Decimal_number
  ;

Decimal_number
  : Unsigned_number
  ;

fragment Unsigned_number
  : Decimal_digit ('_' | Decimal_digit)*
  ;

fragment Decimal_digit
  : [0-9]
  ;

// 8.6 Operators
unary_operator
  : '+'
  | '-'
  | '!'
  | '~'
  | '&'
  | '~&'
  | '|'
  | '~|'
  | '^'
  | '~^'
  | '^~'
  ;

binary_operator
  : '+'
  | '-'
  | '*'
  | '/'
  | '%'
  | '=='
  | '!='
  | '==='
  | '!=='
  | '&&'
  | '||'
  | '**'
  | '<'
  | '<='
  | '>'
  | '>='
  | '&'
  | '|'
  | '^'
  | '^~'
  | '~^'
  | '>>'
  | '<<'
  | '>>>'
  | '<<<'
  ;

White_space
  : [ \t\n\r] + -> channel (HIDDEN)
  ;
