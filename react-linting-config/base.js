/**
 * Base ESLint Configuration for React Projects
 *
 * This file contains the fundamental ESLint setup that all other configurations extend.
 * It includes:
 * - Basic environment settings (Browser, ES6, Node.js)
 * - Core plugins for React linting
 * - Essential rule sets from recommended configurations
 *
 * This is the foundation that other config files build upon.
 */

module.exports = {
  // Environment settings - defines global variables available in different environments
  env: {
    browser: true, // Browser global variables (window, document, etc.)
    es6: true, // ES6 global variables (Set, Map, Promise, etc.)
    node: true, // Node.js global variables (process, Buffer, require, etc.)
    jest: true, // Jest global variables (describe, test, expect, etc.)
  },

  // Parser configuration
  parserOptions: {
    ecmaVersion: 2021, // ECMAScript version to support
    sourceType: 'module', // Code is in module mode (import/export)
    ecmaFeatures: {
      jsx: true, // Enable JSX parsing
    },
  },

  // ESLint plugins used for linting
  plugins: [
    'react', // React-specific linting rules
    'react-hooks', // React Hooks linting rules
    'jsx-a11y', // Accessibility linting rules
    'import', // Import/export statement linting
    'security', // Security vulnerability detection
    'sonarjs', // Code quality and complexity analysis
    'jsdoc', // JSDoc documentation linting
    'prettier', // Prettier integration with ESLint
  ],

  // Extended configurations - inherits rules from these presets
  extends: [
    'eslint:recommended', // ESLint's recommended rule set
    'plugin:react/recommended', // React recommended rules
    'plugin:react-hooks/recommended', // React Hooks recommended rules
    'plugin:jsx-a11y/recommended', // Accessibility recommended rules
    'plugin:import/recommended', // Import recommended rules
    'prettier', // Prettier integration
  ],

  // Settings for plugins
  settings: {
    react: {
      version: 'detect', // Automatically detect React version
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'], // File extensions to resolve
      },
    },
  },
};
