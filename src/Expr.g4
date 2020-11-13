grammar Expr;

// A.6.6 Conditional statements

cond_predicate
  : expression // FIXME
  ;

// A.8.3

constant_expression
  : constant_primary
  | unary_operator constant_primary
  | constant_expression binary_operator constant_expression
  | constant_expression '?' constant_expression ':' constant_expression
  ;

expression
  : primary
  | unary_operator primary
  | expression binary_operator expression
  | expression '?' expression ':' expression // conditional_expression
  ;

mintypmax_expression
  : expression
  | expression ':' expression ':' expression
  ;

// A.8.4

constant_primary
  : primary_literal
//  | ps_parameter_identifier constant_select
//  | specparam_identifier ( '[' constant_range_expression ']' )?
//  | genvar_identifier
//  | formal_port_identifier constant_select
//  | ( package_scope | class_scope )? enum_identifier
//  | constant_concatenation [ [ constant_range_expression ] ]
//  | constant_multiple_concatenation [ [ constant_range_expression ] ]
//  | constant_function_call
//  | constant_let_expression
//  | '(' constant_mintypmax_expression ')'
//  | constant_cast
//  | constant_assignment_pattern_expression
//  | type_reference
  | 'null'
  ;

primary
  : primary_literal
  | hierarchical_identifier
  | '(' mintypmax_expression ')'
  ;

primary_literal
  : number
  ;

constant_bit_select
  : ('[' constant_expression ']')*
  ;


// A.8.5 Expression left-side values

// A.8.6 Operators

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
//  | '==='
//  | '!=='
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

// A.8.7 Numbers

number
  : integral_number
// | real_number
  ;

integral_number
  : Decimal_number
  | Octal_number
  | Binary_number
  | Hex_number
  ;

Decimal_number
  : Unsigned_number
  | (Size)? Decimal_base Unsigned_number
  | (Size)? Decimal_base [xX] ('_')*
  | (Size)? Decimal_base [zZ?] ('_')*
  ;

Binary_number
  : (Size)? '\'' [sS]? [bB] [01xXzZ?] [01xXzZ?_]*
  ;

Octal_number
  : (Size)? '\'' [sS]? [oO] [0-7xXzZ?] [0-7xXzZ?_]*
  ;

Hex_number
  : (Size)? '\'' [sS]? [hH] [0-9a-fA-FxXzZ?] [0-9a-fA-FxXzZ?_]*
  ;

Size
  : [1-9] [_0-9]*
  ;

Unsigned_number
  : [0-9] [_0-9]*
  ;

Decimal_base
  : '\'' [sS]? [dD]
  ;

// A.9.3 Identifiers

hierarchical_identifier
  : ('$root' '.')? (identifier constant_bit_select '.')* identifier
  ;

identifier
  : Simple_identifier
  ;

Simple_identifier
  : [a-zA-Z_] [a-zA-Z0-9_$]*
  ;

// A.9.4 White space

White_space
  : [ \t\n\r] + -> channel (HIDDEN)
  ;
