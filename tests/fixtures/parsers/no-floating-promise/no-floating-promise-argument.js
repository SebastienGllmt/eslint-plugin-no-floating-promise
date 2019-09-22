/**
 * Source code:
 * function class Foo { foo = async ( lambda: (void=>void) ) => { lambda(); }}
 */

exports.parse = () => ({
  type: 'Program',
  start: 0,
  end: 66,
  loc: {
      start: {
          line: 1,
          column: 0
      },
      end: {
          line: 1,
          column: 66
      }
  },
  range: [0, 66],
  comments: [],
  tokens: [{
          type: 'Keyword',
          value: 'class',
          start: 0,
          end: 5,
          loc: {
              start: {
                  line: 1,
                  column: 0
              },
              end: {
                  line: 1,
                  column: 5
              }
          },
          range: [0, 5]
      },
      {
          type: 'Identifier',
          value: 'Foo',
          start: 6,
          end: 9,
          loc: {
              start: {
                  line: 1,
                  column: 6
              },
              end: {
                  line: 1,
                  column: 9
              }
          },
          range: [6, 9]
      },
      {
          type: 'Punctuator',
          value: '{',
          start: 10,
          end: 11,
          loc: {
              start: {
                  line: 1,
                  column: 10
              },
              end: {
                  line: 1,
                  column: 11
              }
          },
          range: [10, 11]
      },
      {
          type: 'Identifier',
          value: 'foo',
          start: 12,
          end: 15,
          loc: {
              start: {
                  line: 1,
                  column: 12
              },
              end: {
                  line: 1,
                  column: 15
              }
          },
          range: [12, 15]
      },
      {
          type: 'Punctuator',
          value: '=',
          start: 16,
          end: 17,
          loc: {
              start: {
                  line: 1,
                  column: 16
              },
              end: {
                  line: 1,
                  column: 17
              }
          },
          range: [16, 17]
      },
      {
          type: 'Identifier',
          value: 'async',
          start: 18,
          end: 23,
          loc: {
              start: {
                  line: 1,
                  column: 18
              },
              end: {
                  line: 1,
                  column: 23
              }
          },
          range: [18, 23]
      },
      {
          type: 'Punctuator',
          value: '(',
          start: 24,
          end: 25,
          loc: {
              start: {
                  line: 1,
                  column: 24
              },
              end: {
                  line: 1,
                  column: 25
              }
          },
          range: [24, 25]
      },
      {
          type: 'Identifier',
          value: 'lambda',
          start: 26,
          end: 32,
          loc: {
              start: {
                  line: 1,
                  column: 26
              },
              end: {
                  line: 1,
                  column: 32
              }
          },
          range: [26, 32]
      },
      {
          type: 'Punctuator',
          value: ':',
          start: 32,
          end: 33,
          loc: {
              start: {
                  line: 1,
                  column: 32
              },
              end: {
                  line: 1,
                  column: 33
              }
          },
          range: [32, 33]
      },
      {
          type: 'Punctuator',
          value: '(',
          start: 34,
          end: 35,
          loc: {
              start: {
                  line: 1,
                  column: 34
              },
              end: {
                  line: 1,
                  column: 35
              }
          },
          range: [34, 35]
      },
      {
          type: 'Keyword',
          value: 'void',
          start: 35,
          end: 39,
          loc: {
              start: {
                  line: 1,
                  column: 35
              },
              end: {
                  line: 1,
                  column: 39
              }
          },
          range: [35, 39]
      },
      {
          type: 'Punctuator',
          value: '=>',
          start: 39,
          end: 41,
          loc: {
              start: {
                  line: 1,
                  column: 39
              },
              end: {
                  line: 1,
                  column: 41
              }
          },
          range: [39, 41]
      },
      {
          type: 'Keyword',
          value: 'void',
          start: 41,
          end: 45,
          loc: {
              start: {
                  line: 1,
                  column: 41
              },
              end: {
                  line: 1,
                  column: 45
              }
          },
          range: [41, 45]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 45,
          end: 46,
          loc: {
              start: {
                  line: 1,
                  column: 45
              },
              end: {
                  line: 1,
                  column: 46
              }
          },
          range: [45, 46]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 47,
          end: 48,
          loc: {
              start: {
                  line: 1,
                  column: 47
              },
              end: {
                  line: 1,
                  column: 48
              }
          },
          range: [47, 48]
      },
      {
          type: 'Punctuator',
          value: '=>',
          start: 49,
          end: 51,
          loc: {
              start: {
                  line: 1,
                  column: 49
              },
              end: {
                  line: 1,
                  column: 51
              }
          },
          range: [49, 51]
      },
      {
          type: 'Punctuator',
          value: '{',
          start: 52,
          end: 53,
          loc: {
              start: {
                  line: 1,
                  column: 52
              },
              end: {
                  line: 1,
                  column: 53
              }
          },
          range: [52, 53]
      },
      {
          type: 'Identifier',
          value: 'lambda',
          start: 54,
          end: 60,
          loc: {
              start: {
                  line: 1,
                  column: 54
              },
              end: {
                  line: 1,
                  column: 60
              }
          },
          range: [54, 60]
      },
      {
          type: 'Punctuator',
          value: '(',
          start: 60,
          end: 61,
          loc: {
              start: {
                  line: 1,
                  column: 60
              },
              end: {
                  line: 1,
                  column: 61
              }
          },
          range: [60, 61]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 61,
          end: 62,
          loc: {
              start: {
                  line: 1,
                  column: 61
              },
              end: {
                  line: 1,
                  column: 62
              }
          },
          range: [61, 62]
      },
      {
          type: 'Punctuator',
          value: ';',
          start: 62,
          end: 63,
          loc: {
              start: {
                  line: 1,
                  column: 62
              },
              end: {
                  line: 1,
                  column: 63
              }
          },
          range: [62, 63]
      },
      {
          type: 'Punctuator',
          value: '}',
          start: 64,
          end: 65,
          loc: {
              start: {
                  line: 1,
                  column: 64
              },
              end: {
                  line: 1,
                  column: 65
              }
          },
          range: [64, 65]
      },
      {
          type: 'Punctuator',
          value: '}',
          start: 65,
          end: 66,
          loc: {
              start: {
                  line: 1,
                  column: 65
              },
              end: {
                  line: 1,
                  column: 66
              }
          },
          range: [65, 66]
      }
  ],
  sourceType: 'module',
  directives: undefined,
  body: [{
      type: 'ClassDeclaration',
      start: 0,
      end: 66,
      loc: {
          start: {
              line: 1,
              column: 0
          },
          end: {
              line: 1,
              column: 66
          }
      },
      range: [0, 66],
      id: {
          type: 'Identifier',
          start: 6,
          end: 9,
          loc: {
              start: {
                  line: 1,
                  column: 6
              },
              end: {
                  line: 1,
                  column: 9
              },
              identifierName: 'Foo'
          },
          range: [6, 9],
          name: 'Foo',
          _babelType: 'Identifier',
      },
      superClass: null,
      body: {
          type: 'ClassBody',
          start: 10,
          end: 66,
          loc: {
              start: {
                  line: 1,
                  column: 10
              },
              end: {
                  line: 1,
                  column: 66
              }
          },
          range: [10, 66],
          body: [{
              type: 'ClassProperty',
              start: 12,
              end: 65,
              loc: {
                  start: {
                      line: 1,
                      column: 12
                  },
                  end: {
                      line: 1,
                      column: 65
                  }
              },
              range: [12, 65],
              static: false,
              key: {
                  type: 'Identifier',
                  start: 12,
                  end: 15,
                  loc: {
                      start: {
                          line: 1,
                          column: 12
                      },
                      end: {
                          line: 1,
                          column: 15
                      },
                      identifierName: 'foo'
                  },
                  range: [12, 15],
                  name: 'foo',
                  _babelType: 'Identifier',
              },
              computed: false,
              variance: null,
              value: {
                  type: 'ArrowFunctionExpression',
                  start: 18,
                  end: 65,
                  loc: {
                      start: {
                          line: 1,
                          column: 18
                      },
                      end: {
                          line: 1,
                          column: 65
                      }
                  },
                  range: [18, 65],
                  id: null,
                  generator: false,
                  async: true,
                  expression: false,
                  params: [{
                      type: 'Identifier',
                      start: 26,
                      end: 46,
                      loc: {
                          start: {
                              line: 1,
                              column: 26
                          },
                          end: {
                              line: 1,
                              column: 46
                          },
                          identifierName: 'lambda'
                      },
                      range: [26, 46],
                      name: 'lambda',
                      typeAnnotation: {
                          type: 'TypeAnnotation',
                          start: 32,
                          end: 46,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 32
                              },
                              end: {
                                  line: 1,
                                  column: 46
                              }
                          },
                          range: [32, 46],
                          typeAnnotation: {
                              type: 'FunctionTypeAnnotation',
                              start: 35,
                              end: 45,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 35
                                  },
                                  end: {
                                      line: 1,
                                      column: 45
                                  }
                              },
                              range: [35, 45],
                              params: [{
                                  type: 'FunctionTypeParam',
                                  start: 35,
                                  end: 41,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 35
                                      },
                                      end: {
                                          line: 1,
                                          column: 41
                                      }
                                  },
                                  range: [35, 41],
                                  optional: false,
                                  typeAnnotation: {
                                      type: 'VoidTypeAnnotation',
                                      start: 35,
                                      end: 39,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 35
                                          },
                                          end: {
                                              line: 1,
                                              column: 39
                                          }
                                      },
                                      range: [35, 39],
                                      _babelType: 'VoidTypeAnnotation',
                                  },
                                  _babelType: 'FunctionTypeParam',
                              }],
                              rest: null,
                              returnType: {
                                  type: 'VoidTypeAnnotation',
                                  start: 41,
                                  end: 45,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 41
                                      },
                                      end: {
                                          line: 1,
                                          column: 45
                                      }
                                  },
                                  range: [41, 45],
                                  _babelType: 'VoidTypeAnnotation',
                              },
                              typeParameters: null,
                              _babelType: 'FunctionTypeAnnotation',
                          },
                          _babelType: 'TypeAnnotation',
                      },
                      _babelType: 'Identifier',
                  }],
                  body: {
                      type: 'BlockStatement',
                      start: 52,
                      end: 65,
                      loc: {
                          start: {
                              line: 1,
                              column: 52
                          },
                          end: {
                              line: 1,
                              column: 65
                          }
                      },
                      range: [52, 65],
                      body: [{
                          type: 'ExpressionStatement',
                          start: 54,
                          end: 63,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 54
                              },
                              end: {
                                  line: 1,
                                  column: 63
                              }
                          },
                          range: [54, 63],
                          expression: {
                              type: 'CallExpression',
                              start: 54,
                              end: 62,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 54
                                  },
                                  end: {
                                      line: 1,
                                      column: 62
                                  }
                              },
                              range: [54, 62],
                              callee: {
                                  type: 'Identifier',
                                  start: 54,
                                  end: 60,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 54
                                      },
                                      end: {
                                          line: 1,
                                          column: 60
                                      },
                                      identifierName: 'lambda'
                                  },
                                  range: [54, 60],
                                  name: 'lambda',
                                  _babelType: 'Identifier',
                              },
                              arguments: [],
                              _babelType: 'CallExpression',
                          },
                          _babelType: 'ExpressionStatement',
                      }],
                      _babelType: 'BlockStatement',
                  },
                  _babelType: 'ArrowFunctionExpression',
              },
              _babelType: 'ClassProperty',
          }],
          _babelType: 'ClassBody',
      },
      _babelType: 'ClassDeclaration',
  }],
})