module.exports = {
    env: {
        browser: true,
        es2020: true
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
    },
    plugins: ['react-refresh'],
    rules: {
        'indent': ['error', 4],
        'quotes': ['error', 'single'],
        'react-refresh/only-export-components': 'warn',
        'key-spacing': [
            'error',
            {
                'align': 'value'
            }
        ],
    },
}
