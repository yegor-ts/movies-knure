module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true
    },
    'extends': 'eslint:recommended',
    'overrides': [
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': ['warn', 4, {
            'SwitchCase': 1
        }],
        'no-undef': 'off',
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'no-console': ['warn', { 'allow': ['log', 'warn', 'error'] }],
        'no-trailing-spaces': 'error',
        'no-template-curly-in-string': 'error',
        'no-empty-function': 'error',
        'no-eq-null': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-implicit-globals': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'error',
        'no-lone-blocks': 'error',
        'no-loop-func': 'error',
        'no-multi-spaces': 'error',
        'no-multi-str': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-unused-expressions': 'error',
        'no-useless-concat': 'error',
        'no-label-var': 'error',
        'no-restricted-globals': 'error',
        'no-undefined': 'error',
        'no-multi-assign': 'error'
    }
};
