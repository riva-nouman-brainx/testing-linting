/**
 * Code Quality ESLint Configuration for React
 *
 * This file contains linting rules focused on code quality and maintainability for React applications.
 * It includes:
 * - Code complexity management
 * - Performance optimization
 * - Best practices enforcement
 * - Code maintainability rules
 *
 * These rules help maintain high-quality, maintainable, and performant React code.
 */

module.exports = {
  // Code quality specific linting rules
  rules: {
    // Code Complexity Management
    'sonarjs/cognitive-complexity': ['error', 15], // Limit cognitive complexity to 15
    'sonarjs/no-duplicate-string': 'off', // Temporarily disabled for flexibility
    'sonarjs/no-identical-functions': 'error', // Prevent identical functions
    'sonarjs/no-collapsible-if': 'error', // Prevent collapsible if statements
    'sonarjs/no-redundant-boolean': 'error', // Prevent redundant boolean expressions
    'sonarjs/no-unused-collection': 'error', // Prevent unused collections
    'sonarjs/prefer-immediate-return': 'error', // Prefer immediate return
    'sonarjs/no-identical-expressions': 'error', // Prevent identical expressions
    'sonarjs/no-redundant-jump': 'error', // Prevent redundant jump statements
    'sonarjs/no-small-switch': 'error', // Prevent small switch statements
    'sonarjs/no-use-of-empty-return-value': 'error', // Prevent empty return values
    'sonarjs/prefer-single-boolean-return': 'error', // Prefer single boolean return
    'sonarjs/prefer-while': 'error', // Prefer while loops when appropriate
    'sonarjs/no-gratuitous-expressions': 'error', // Prevent gratuitous expressions
    'sonarjs/no-inverted-boolean-check': 'error', // Prevent inverted boolean checks
    'sonarjs/no-nested-switch': 'error', // Prevent nested switch statements
    'sonarjs/no-nested-template-literals': 'error', // Prevent nested template literals
    'sonarjs/no-useless-catch': 'error', // Prevent useless catch blocks
    'sonarjs/prefer-object-literal': 'error', // Prefer object literals
    // Note: prefer-optional-chain and prefer-template are not available in this version

    // General Code Quality Rules
    complexity: ['error', 15], // Limit cyclomatic complexity to 15
    'max-lines': ['error', 300], // Limit file length to 300 lines
    'max-lines-per-function': ['error', 50], // Limit function length to 50 lines
    'max-params': ['error', 4], // Limit function parameters to 4
    'max-depth': ['error', 4], // Limit nesting depth to 4 levels
    'max-nested-callbacks': ['error', 3], // Limit nested callbacks to 3 levels
    'max-statements': ['error', 20], // Limit statements per function to 20
    'max-statements-per-line': 'off', // Temporarily disabled for flexibility

    'max-len': [
      'error',
      {
        code: 100, // Line length limit
        tabWidth: 2, // Tab width
        ignoreUrls: true, // Ignore URLs
        ignoreStrings: true, // Ignore long strings
        ignoreTemplateLiterals: true, // Ignore template literals
        ignoreRegExpLiterals: true, // Ignore regex literals
        ignoreComments: true, // Ignore comments
      },
    ],

    // Code Maintainability
    'consistent-return': 'error', // Ensure consistent return statements
    'no-else-return': 'error', // Prevent else after return
    'no-return-assign': 'error', // Prevent assignment in return statement
    'no-return-await': 'error', // Prevent unnecessary return await
    'no-unmodified-loop-condition': 'error', // Prevent unmodified loop conditions
    'no-unreachable-loop': 'error', // Prevent unreachable loops
    'no-useless-return': 'error', // Prevent useless return statements

    // Variable Rules
    'no-var': 'error', // Prevent var declarations
    'prefer-const': 'error', // Prefer const for non-reassigned variables
    // Note: prefer-let is not available in this ESLint version
    'no-redeclare': 'error', // Prevent variable redeclaration
    'no-undef': 'error', // Prevent undeclared variables
    'no-unused-vars': 'error', // Prevent unused variables

    // Function Rules
    'prefer-arrow-callback': 'error', // Prefer arrow functions for callbacks
    'prefer-rest-params': 'error', // Prefer rest parameters over arguments
    'prefer-spread': 'error', // Prefer spread operator over apply()
    'prefer-template': 'error', // Prefer template literals over concatenation
    'prefer-destructuring': [
      'error',
      {
        array: true, // Prefer array destructuring
        object: true, // Prefer object destructuring
      },
      {
        enforceForRenamedProperties: false, // Don't enforce for renamed properties
      },
    ],

    // Performance Optimization
    'no-loop-func': 'error', // Prevent functions in loops
    'no-new-object': 'error', // Prevent Object constructor
    'no-new-wrappers': 'error', // Prevent wrapper object constructors
    'no-array-constructor': 'error', // Prevent Array constructor
    'no-new-require': 'error', // Prevent new require() usage
    'no-new-symbol': 'error', // Prevent new Symbol() usage
    'no-obj-calls': 'error', // Prevent calling non-callable objects
    'no-octal': 'error', // Prevent octal literals
    'no-octal-escape': 'error', // Prevent octal escape sequences
    'no-proto': 'error', // Prevent __proto__ usage
    'no-regex-spaces': 'error', // Prevent regex spaces
    'no-self-assign': 'error', // Prevent self assignment
    'no-self-compare': 'error', // Prevent self comparison
    'no-sequences': 'error', // Prevent comma operators
    'no-shadow': 'error', // Prevent variable shadowing
    'no-shadow-restricted-names': 'error', // Prevent shadowing restricted names
    'no-sparse-arrays': 'error', // Prevent sparse arrays
    'no-this-before-super': 'error', // Prevent this before super
    'no-throw-literal': 'error', // Prevent throwing literals
    'no-undef-init': 'error', // Prevent undefined initialization
    'no-unexpected-multiline': 'error', // Prevent unexpected multiline
    'no-unmodified-loop-condition': 'error', // Prevent unmodified loop conditions
    'no-unreachable': 'error', // Prevent unreachable code
    'no-unreachable-loop': 'error', // Prevent unreachable loops
    'no-unsafe-finally': 'error', // Prevent unsafe finally blocks
    'no-unsafe-negation': 'error', // Prevent unsafe negation
    'no-unsafe-optional-chaining': 'error', // Prevent unsafe optional chaining
    'no-unused-expressions': 'error', // Prevent unused expressions
    'no-unused-labels': 'error', // Prevent unused labels
    'no-use-before-define': 'error', // Prevent use before define
    'no-useless-call': 'error', // Prevent useless call/apply
    'no-useless-catch': 'error', // Prevent useless catch blocks
    'no-useless-computed-key': 'error', // Prevent useless computed keys
    'no-useless-concat': 'error', // Prevent useless concatenation
    'no-useless-constructor': 'error', // Prevent useless constructors
    'no-useless-escape': 'error', // Prevent useless escapes
    'no-useless-rename': 'error', // Prevent useless renaming
    'no-useless-return': 'error', // Prevent useless returns
    'no-void': 'error', // Prevent void operator
    'no-with': 'error', // Prevent with statements

    // Error Handling
    'prefer-promise-reject-errors': 'error', // Ensure Promise rejections are Error objects
    'require-await': 'warn', // Warn about async without await
    'require-atomic-updates': 'error', // Prevent race conditions in async operations
    'require-yield': 'error', // Require yield in generator functions
    'use-isnan': 'error', // Require isNaN() for NaN checks
    'valid-typeof': 'error', // Ensure valid typeof comparisons
    yoda: 'error', // Prevent yoda conditions

    // Code Style and Consistency
    'no-multiple-empty-lines': [
      'error',
      {
        max: 2, // Maximum 2 empty lines
        maxEOF: 1, // Maximum 1 empty line at end of file
        maxBOF: 0, // No empty lines at beginning of file
      },
    ],
    'no-trailing-spaces': 'error', // Prevent trailing spaces
    'no-mixed-spaces-and-tabs': 'error', // Prevent mixed spaces and tabs
    'no-warning-comments': [
      'warn',
      {
        terms: ['todo', 'fixme', 'hack', 'xxx'],
        location: 'start',
      },
    ],

    // React-specific quality rules
    'react/jsx-max-depth': ['error', { max: 6 }], // Limit JSX depth
    'react/jsx-no-bind': [
      'error',
      {
        ignoreRefs: true,
        allowArrowFunctions: true,
        allowFunctions: false,
        allowBind: false,
        ignoreDOMComponents: true,
      },
    ], // Prevent function binding in JSX
    'react/jsx-no-literals': 'off', // Allow string literals
    'react/jsx-no-useless-fragment': 'error', // Prevent useless fragments
    'react/jsx-pascal-case': 'error', // PascalCase for components
    'react/jsx-props-no-multi-spaces': 'error', // No multiple spaces in props
    'react/sort-default-props': 'error', // Sort default props
    'react/jsx-uses-react': 'error', // React is used
    'react/jsx-uses-vars': 'error', // Variables are used in JSX
    'react/no-array-index-key': 'warn', // Warn about array index keys
    'react/no-children-prop': 'error', // No children prop
    'react/no-danger': 'error', // No dangerouslySetInnerHTML
    'react/no-deprecated': 'error', // No deprecated React features
    'react/no-direct-mutation-state': 'error', // No direct state mutation
    'react/no-find-dom-node': 'error', // No findDOMNode
    'react/no-is-mounted': 'error', // No isMounted
    'react/no-render-return-value': 'error', // No render return value
    'react/no-string-refs': 'error', // No string refs
    'react/no-unescaped-entities': 'error', // No unescaped entities
    'react/no-unknown-property': 'error', // No unknown properties
    'react/no-unsafe': 'error', // No unsafe lifecycle methods
    'react/require-render-return': 'error', // Require render return
    'react/self-closing-comp': 'error', // Self-closing components
    'react/sort-comp': 'error', // Sort component methods
    'react/sort-prop-types': 'error', // Sort prop types
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ], // Use arrow functions for components
    'react/jsx-boolean-value': ['error', 'never'], // No boolean props
    'react/jsx-handler-names': 'error', // Descriptive handler names
    'react/jsx-key': 'error', // Keys in lists
    'react/jsx-no-comment-textnodes': 'error', // No comment text nodes
    'react/jsx-no-target-blank': 'error', // No target="_blank" without rel
    'react/jsx-no-useless-fragment': 'error', // No useless fragments
    'react/jsx-pascal-case': 'error', // PascalCase for components
    'react/jsx-props-no-multi-spaces': 'error', // No multiple spaces in props
    'react/sort-default-props': 'error', // Sort default props
    'react/jsx-uses-react': 'error', // React is used
    'react/jsx-uses-vars': 'error', // Variables are used
    'react/no-array-index-key': 'warn', // Warn about array index keys
    'react/no-children-prop': 'error', // No children prop
    'react/no-danger': 'error', // No dangerouslySetInnerHTML
    'react/no-deprecated': 'error', // No deprecated React features
    'react/no-direct-mutation-state': 'error', // No direct state mutation
    'react/no-find-dom-node': 'error', // No findDOMNode
    'react/no-is-mounted': 'error', // No isMounted
    'react/no-render-return-value': 'error', // No render return value
    'react/no-string-refs': 'error', // No string refs
    'react/no-unescaped-entities': 'error', // No unescaped entities
    'react/no-unknown-property': 'error', // No unknown properties
    'react/no-unsafe': 'error', // No unsafe lifecycle methods
    'react/require-render-return': 'error', // Require render return
    'react/self-closing-comp': 'error', // Self-closing components
    'react/sort-comp': 'error', // Sort component methods
    'react/sort-prop-types': 'error', // Sort prop types
  },
};
