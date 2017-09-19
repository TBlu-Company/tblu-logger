module.exports = {
  'extends': 'standard',
  env: {
    mocha: true
  },
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    'one-var': 0,
    'semi': [2, 'always'],
    'no-extra-semi': 2,
    'semi-style': ['error', 'last'],
    'semi-spacing': ['error', {'before': false, 'after': true}],
    'indent': 2,
    'space-before-function-paren': 0,
    'brace-style': [2, '1tbs', { 'allowSingleLine': true }],
    'import/first': 0,
    'import/named': 2,
    'import/namespace': 2,
    'import/default': 2,
    'import/export': 2,
    'no-multiple-empty-lines': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
