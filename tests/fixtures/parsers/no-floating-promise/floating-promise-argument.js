/**
 * Source code:
 * 
 */

exports.parse = () => ({
  type: 'Program',
  start: 0,
  end: 75,
  loc: {
      start: {
          line: 1,
          column: 0
      },
      end: {
          line: 1,
          column: 75
      }
  },
  range: [0, 75],
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
          type: 'Identifier',
          value: 'Promise',
          start: 41,
          end: 48,
          loc: {
              start: {
                  line: 1,
                  column: 41
              },
              end: {
                  line: 1,
                  column: 48
              }
          },
          range: [41, 48]
      },
      {
          type: 'Punctuator',
          value: '<',
          start: 48,
          end: 49,
          loc: {
              start: {
                  line: 1,
                  column: 48
              },
              end: {
                  line: 1,
                  column: 49
              }
          },
          range: [48, 49]
      },
      {
          type: 'Keyword',
          value: 'void',
          start: 49,
          end: 53,
          loc: {
              start: {
                  line: 1,
                  column: 49
              },
              end: {
                  line: 1,
                  column: 53
              }
          },
          range: [49, 53]
      },
      {
          type: 'Punctuator',
          value: '>',
          start: 53,
          end: 54,
          loc: {
              start: {
                  line: 1,
                  column: 53
              },
              end: {
                  line: 1,
                  column: 54
              }
          },
          range: [53, 54]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 54,
          end: 55,
          loc: {
              start: {
                  line: 1,
                  column: 54
              },
              end: {
                  line: 1,
                  column: 55
              }
          },
          range: [54, 55]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 56,
          end: 57,
          loc: {
              start: {
                  line: 1,
                  column: 56
              },
              end: {
                  line: 1,
                  column: 57
              }
          },
          range: [56, 57]
      },
      {
          type: 'Punctuator',
          value: '=>',
          start: 58,
          end: 60,
          loc: {
              start: {
                  line: 1,
                  column: 58
              },
              end: {
                  line: 1,
                  column: 60
              }
          },
          range: [58, 60]
      },
      {
          type: 'Punctuator',
          value: '{',
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
          type: 'Identifier',
          value: 'lambda',
          start: 63,
          end: 69,
          loc: {
              start: {
                  line: 1,
                  column: 63
              },
              end: {
                  line: 1,
                  column: 69
              }
          },
          range: [63, 69]
      },
      {
          type: 'Punctuator',
          value: '(',
          start: 69,
          end: 70,
          loc: {
              start: {
                  line: 1,
                  column: 69
              },
              end: {
                  line: 1,
                  column: 70
              }
          },
          range: [69, 70]
      },
      {
          type: 'Punctuator',
          value: ')',
          start: 70,
          end: 71,
          loc: {
              start: {
                  line: 1,
                  column: 70
              },
              end: {
                  line: 1,
                  column: 71
              }
          },
          range: [70, 71]
      },
      {
          type: 'Punctuator',
          value: ';',
          start: 71,
          end: 72,
          loc: {
              start: {
                  line: 1,
                  column: 71
              },
              end: {
                  line: 1,
                  column: 72
              }
          },
          range: [71, 72]
      },
      {
          type: 'Punctuator',
          value: '}',
          start: 73,
          end: 74,
          loc: {
              start: {
                  line: 1,
                  column: 73
              },
              end: {
                  line: 1,
                  column: 74
              }
          },
          range: [73, 74]
      },
      {
          type: 'Punctuator',
          value: '}',
          start: 74,
          end: 75,
          loc: {
              start: {
                  line: 1,
                  column: 74
              },
              end: {
                  line: 1,
                  column: 75
              }
          },
          range: [74, 75]
      }
  ],
  sourceType: 'module',
  directives: undefined,
  body: [{
      type: 'ClassDeclaration',
      start: 0,
      end: 75,
      loc: {
          start: {
              line: 1,
              column: 0
          },
          end: {
              line: 1,
              column: 75
          }
      },
      range: [0, 75],
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
          end: 75,
          loc: {
              start: {
                  line: 1,
                  column: 10
              },
              end: {
                  line: 1,
                  column: 75
              }
          },
          range: [10, 75],
          body: [{
              type: 'ClassProperty',
              start: 12,
              end: 74,
              loc: {
                  start: {
                      line: 1,
                      column: 12
                  },
                  end: {
                      line: 1,
                      column: 74
                  }
              },
              range: [12, 74],
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
                  end: 74,
                  loc: {
                      start: {
                          line: 1,
                          column: 18
                      },
                      end: {
                          line: 1,
                          column: 74
                      }
                  },
                  range: [18, 74],
                  id: null,
                  generator: false,
                  async: true,
                  expression: false,
                  params: [{
                      type: 'Identifier',
                      start: 26,
                      end: 55,
                      loc: {
                          start: {
                              line: 1,
                              column: 26
                          },
                          end: {
                              line: 1,
                              column: 55
                          },
                          identifierName: 'lambda'
                      },
                      range: [26, 55],
                      name: 'lambda',
                      typeAnnotation: {
                          type: 'TypeAnnotation',
                          start: 32,
                          end: 55,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 32
                              },
                              end: {
                                  line: 1,
                                  column: 55
                              }
                          },
                          range: [32, 55],
                          typeAnnotation: {
                              type: 'FunctionTypeAnnotation',
                              start: 35,
                              end: 54,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 35
                                  },
                                  end: {
                                      line: 1,
                                      column: 54
                                  }
                              },
                              range: [35, 54],
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
                                  type: 'GenericTypeAnnotation',
                                  start: 41,
                                  end: 54,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 41
                                      },
                                      end: {
                                          line: 1,
                                          column: 54
                                      }
                                  },
                                  range: [41, 54],
                                  typeParameters: {
                                      type: 'TypeParameterInstantiation',
                                      start: 48,
                                      end: 54,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 48
                                          },
                                          end: {
                                              line: 1,
                                              column: 54
                                          }
                                      },
                                      range: [48, 54],
                                      params: [{
                                          type: 'VoidTypeAnnotation',
                                          start: 49,
                                          end: 53,
                                          loc: {
                                              start: {
                                                  line: 1,
                                                  column: 49
                                              },
                                              end: {
                                                  line: 1,
                                                  column: 53
                                              }
                                          },
                                          range: [49, 53],
                                          _babelType: 'VoidTypeAnnotation',
                                      }],
                                      _babelType: 'TypeParameterInstantiation',
                                  },
                                  id: {
                                      type: 'Identifier',
                                      start: 41,
                                      end: 48,
                                      loc: {
                                          start: {
                                              line: 1,
                                              column: 41
                                          },
                                          end: {
                                              line: 1,
                                              column: 48
                                          },
                                          identifierName: 'Promise'
                                      },
                                      range: [41, 48],
                                      name: 'Promise',
                                      _babelType: 'Identifier',
                                  },
                                  _babelType: 'GenericTypeAnnotation',
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
                      start: 61,
                      end: 74,
                      loc: {
                          start: {
                              line: 1,
                              column: 61
                          },
                          end: {
                              line: 1,
                              column: 74
                          }
                      },
                      range: [61, 74],
                      body: [{
                          type: 'ExpressionStatement',
                          start: 63,
                          end: 72,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 63
                              },
                              end: {
                                  line: 1,
                                  column: 72
                              }
                          },
                          range: [63, 72],
                          expression: {
                              type: 'CallExpression',
                              start: 63,
                              end: 71,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 63
                                  },
                                  end: {
                                      line: 1,
                                      column: 71
                                  }
                              },
                              range: [63, 71],
                              callee: {
                                  type: 'Identifier',
                                  start: 63,
                                  end: 69,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 63
                                      },
                                      end: {
                                          line: 1,
                                          column: 69
                                      },
                                      identifierName: 'lambda'
                                  },
                                  range: [63, 69],
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
});
