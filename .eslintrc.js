module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/prefer-default-export': 'off',
    'react/prop-types': 'off',
    'react/no-array-index-key': 'off',
    'react-hooks/exhaustive-deps': 0,
    'react/react-in-jsx-scope': 0,
    'no-restricted-exports': 0,
    'react/jsx-filename-extension': 0,
    'default-param-last': 0,
    eqeqeq: 0,
    'no-console': 0,
    'react/jsx-no-useless-fragment': 0,
    'import/no-extraneous-dependencies': 0,
  },
};
