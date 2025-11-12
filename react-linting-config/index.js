/**
 * Main React ESLint Configuration
 *
 * This is the main configuration file that combines all the modular configurations.
 * It extends:
 * - Base configuration (core setup)
 * - React-specific rules
 * - Security rules
 * - Code quality rules
 *
 * This provides a comprehensive linting setup for React applications.
 */

module.exports = {
  // Extend all modular configurations
  extends: [
    './base.js', // Core ESLint setup and plugins
    './react.js', // React-specific rules
    './security.js', // Security-focused rules
    './quality.js', // Code quality rules
  ],

  // Global rules that apply everywhere
  rules: {
    // ========== OVERRIDES FOR REACT ==========

    // React-specific overrides
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'error', // Require prop types
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading
    'react/jsx-one-expression-per-line': 'off', // Allow multiple expressions per line
    'react/jsx-wrap-multilines': 'off', // Allow unwrapped multiline JSX
    'react/jsx-curly-newline': 'off', // Allow curly braces on same line
    'react/jsx-indent': 'off', // Use Prettier for indentation
    'react/jsx-indent-props': 'off', // Use Prettier for indentation
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }],
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ],
    'react/sort-default-props': 'error',
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ],
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-undef': 'error',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/no-array-index-key': 'warn',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-render-return-value': 'error',
    'react/no-string-refs': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unsafe': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // Accessibility rules
    'jsx-a11y/alt-text': 'error',
    'jsx-a11y/anchor-has-content': 'error',
    'jsx-a11y/anchor-is-valid': 'error',
    'jsx-a11y/aria-props': 'error',
    'jsx-a11y/aria-proptypes': 'error',
    'jsx-a11y/aria-role': 'error',
    'jsx-a11y/aria-unsupported-elements': 'error',
    'jsx-a11y/click-events-have-key-events': 'error',
    'jsx-a11y/heading-has-content': 'error',
    'jsx-a11y/html-has-lang': 'error',
    'jsx-a11y/iframe-has-title': 'error',
    'jsx-a11y/img-redundant-alt': 'error',
    'jsx-a11y/no-access-key': 'error',
    'jsx-a11y/no-autofocus': 'error',
    'jsx-a11y/no-distracting-elements': 'error',
    'jsx-a11y/no-interactive-element-to-noninteractive-role': 'error',
    'jsx-a11y/no-noninteractive-element-interactions': 'error',
    'jsx-a11y/no-noninteractive-element-to-interactive-role': 'error',
    'jsx-a11y/no-noninteractive-tabindex': 'error',
    'jsx-a11y/no-redundant-roles': 'error',
    'jsx-a11y/no-static-element-interactions': 'error',
    'jsx-a11y/role-has-required-aria-props': 'error',
    'jsx-a11y/role-supports-aria-props': 'error',
    'jsx-a11y/scope': 'error',
    'jsx-a11y/tabindex-no-positive': 'error',

    // Import rules
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'import/no-unresolved': 'error',
    'import/no-cycle': 'error',
    'import/no-self-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-default-export': 'off',
    'import/prefer-default-export': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-absolute-path': 'error',
    'import/no-useless-path-segments': 'error',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
      },
    ],

    // Security rules
    'security/detect-object-injection': 'warn',
    'security/detect-non-literal-regexp': 'error',
    'security/detect-unsafe-regex': 'error',
    'security/detect-eval-with-expression': 'error',
    'security/detect-child-process': 'warn',
    'security/detect-new-buffer': 'error',
    'no-eval': 'error',
    'no-implied-eval': 'error',
    'no-new-func': 'error',
    'no-script-url': 'error',
    'no-alert': 'error',
    'no-console': 'warn',
    'no-debugger': 'error',

    // Code quality rules
    'sonarjs/cognitive-complexity': ['error', 15],
    'sonarjs/no-duplicate-string': 'off',
    'sonarjs/no-identical-functions': 'error',
    'sonarjs/no-collapsible-if': 'error',
    'sonarjs/no-redundant-boolean': 'error',
    'sonarjs/prefer-immediate-return': 'error',
    'sonarjs/no-identical-expressions': 'error',
    // Note: prefer-optional-chain and prefer-template are not available in this version

    // General code quality
    complexity: ['error', 15],
    'max-lines': ['error', 300],
    'max-lines-per-function': ['error', 50],
    'max-params': ['error', 4],
    'max-depth': ['error', 4],
    'max-nested-callbacks': ['error', 3],
    'max-statements': ['error', 20],
    'max-len': [
      'error',
      {
        code: 100,
        tabWidth: 2,
        ignoreUrls: true,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
        ignoreComments: true,
      },
    ],

    // Variable rules
    'no-var': 'error',
    'prefer-const': 'error',
    'no-redeclare': 'error',
    'no-undef': 'error',
    'no-unused-vars': 'error',

    // Function rules
    'prefer-arrow-callback': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true,
      },
      {
        enforceForRenamedProperties: false,
      },
    ],

    // Error handling
    'no-throw-literal': 'error',
    'prefer-promise-reject-errors': 'error',
    'no-async-promise-executor': 'error',
    'require-atomic-updates': 'error',

    // Code style
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2,
        maxEOF: 1,
        maxBOF: 0,
      },
    ],
    'no-trailing-spaces': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', 'hack', 'xxx'],
        location: 'start',
      },
    ],

    // JSDoc rules (optional)
    'jsdoc/require-jsdoc': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-description': 'off',
    'jsdoc/check-tag-names': 'off',
    'jsdoc/no-undefined-types': 'off',
    'jsdoc/require-param-description': 'off',
    'jsdoc/require-param-type': 'off',
  },

  // Overrides for specific file types
  overrides: [
    {
      files: ['**/*.test.js', '**/*.spec.js', '**/__tests__/**/*.js'],
      rules: {
        'no-console': 'off',
        'max-lines': 'off',
        'max-lines-per-function': 'off',
        complexity: 'off',
        'react/jsx-no-bind': 'off',
      },
    },
  ],
};
