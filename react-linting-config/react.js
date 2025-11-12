/**
 * React-Specific ESLint Configuration
 *
 * This file contains linting rules focused on React best practices.
 * It includes:
 * - React component patterns
 * - JSX best practices
 * - React Hooks rules
 * - Component lifecycle patterns
 *
 * These rules help maintain high-quality React applications.
 */

module.exports = {
  // React-specific linting rules
  rules: {
    // React component rules
    'react/react-in-jsx-scope': 'off', // Not needed in React 17+
    'react/prop-types': 'error', // Require prop types
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }], // JSX in .js files
    'react/jsx-props-no-spreading': 'off', // Allow prop spreading
    'react/jsx-one-expression-per-line': 'off', // Allow multiple expressions per line
    'react/jsx-wrap-multilines': 'off', // Allow unwrapped multiline JSX
    'react/jsx-curly-newline': 'off', // Allow curly braces on same line
    'react/jsx-indent': 'off', // Use Prettier for indentation
    'react/jsx-indent-props': 'off', // Use Prettier for indentation
    'react/jsx-max-props-per-line': ['error', { maximum: 1, when: 'multiline' }], // Max 1 prop per line when multiline
    'react/jsx-sort-props': [
      'error',
      {
        callbacksLast: true,
        shorthandFirst: true,
        noSortAlphabetically: false,
        reservedFirst: true,
      },
    ], // Sort props alphabetically
    'react/sort-default-props': 'error', // Sort default props
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
    'react/jsx-no-duplicate-props': 'error', // No duplicate props
    'react/jsx-no-undef': 'error', // No undefined JSX elements
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

    // React Hooks rules
    'react-hooks/rules-of-hooks': 'error', // Enforce Rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Exhaustive dependencies

    // React component structure rules
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ], // Use arrow functions for components
    'react/jsx-boolean-value': ['error', 'never'], // No boolean props
    'react/jsx-closing-bracket-location': 'off', // Use Prettier
    'react/jsx-closing-tag-location': 'off', // Use Prettier
    'react/jsx-equals-spacing': 'off', // Use Prettier
    'react/jsx-first-prop-new-line': 'off', // Use Prettier
    'react/jsx-handler-names': 'error', // Descriptive handler names
    'react/jsx-key': 'error', // Keys in lists
    'react/jsx-max-depth': ['error', { max: 6 }], // Max JSX depth
    'react/jsx-no-comment-textnodes': 'error', // No comment text nodes
    'react/jsx-no-literals': 'off', // Allow string literals
    'react/jsx-no-target-blank': 'error', // No target="_blank" without rel
    'react/jsx-no-useless-fragment': 'error', // No useless fragments
    'react/jsx-pascal-case': 'error', // PascalCase for components
    'react/jsx-props-no-multi-spaces': 'error', // No multiple spaces in props
    'react/sort-default-props': 'error', // Sort default props
    'react/jsx-space-before-closing': 'off', // Use Prettier
    'react/jsx-tag-spacing': 'off', // Use Prettier
    'react/jsx-uses-react': 'error', // React is used
    'react/jsx-uses-vars': 'error', // Variables are used

    // React component lifecycle rules
    // Note: component-definition-prop-types is not available in this version
    'react/default-props-match-prop-types': 'error', // Default props match prop types
    'react/destructuring-assignment': 'error', // Destructuring assignment
    'react/forbid-component-props': 'off', // Allow any component props
    'react/forbid-dom-props': 'off', // Allow any DOM props
    'react/forbid-elements': 'off', // Allow any elements
    'react/forbid-foreign-prop-types': 'error', // No foreign prop types
    'react/forbid-prop-types': 'off', // Allow any prop types
    'react/no-access-state-in-setstate': 'error', // No state access in setState
    'react/no-adjacent-inline-elements': 'error', // No adjacent inline elements
    'react/no-array-index-key': 'warn', // Warn about array index keys
    'react/no-children-prop': 'error', // No children prop
    'react/no-danger-with-children': 'error', // No danger with children
    'react/no-did-mount-set-state': 'error', // No setState in componentDidMount
    'react/no-did-update-set-state': 'error', // No setState in componentDidUpdate
    'react/no-find-dom-node': 'error', // No findDOMNode
    'react/no-invalid-html-attribute': 'error', // No invalid HTML attributes
    'react/no-is-mounted': 'error', // No isMounted
    'react/no-namespace': 'error', // No namespace components
    'react/no-object-type-as-default-prop': 'error', // No object as default prop
    'react/no-redundant-should-component-update': 'error', // No redundant shouldComponentUpdate
    'react/no-render-return-value': 'error', // No render return value
    'react/no-set-state': 'off', // Allow setState
    'react/no-typos': 'error', // No typos in component names
    'react/no-unescaped-entities': 'error', // No unescaped entities
    'react/no-unknown-property': 'error', // No unknown properties
    'react/no-unsafe': 'error', // No unsafe lifecycle methods
    'react/no-unstable-nested-components': 'error', // No unstable nested components
    'react/no-unused-class-component-methods': 'error', // No unused class methods
    'react/no-unused-prop-types': 'error', // No unused prop types
    'react/no-unused-state': 'error', // No unused state
    'react/prefer-es6-class': 'error', // Prefer ES6 classes
    'react/prefer-exact-props': 'off', // Allow inexact props
    'react/prefer-read-only-props': 'error', // Prefer read-only props
    'react/prefer-stateless-function': 'error', // Prefer stateless functions
    'react/require-default-props': 'error', // Require default props
    'react/require-optimization': 'off', // No optimization requirement
    'react/require-render-return': 'error', // Require render return
    'react/self-closing-comp': 'error', // Self-closing components
    'react/sort-comp': 'error', // Sort component methods
    'react/sort-prop-types': 'error', // Sort prop types
    'react/state-in-constructor': 'error', // State in constructor
    'react/static-property-placement': 'error', // Static property placement
    'react/style-prop-object': 'error', // Style prop object
    'react/void-dom-elements-no-children': 'error', // No children in void elements
  },
};
