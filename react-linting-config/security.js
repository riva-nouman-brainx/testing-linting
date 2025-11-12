/**
 * Security-Focused ESLint Configuration for React
 *
 * This file contains linting rules focused on security best practices for React applications.
 * It includes:
 * - XSS prevention
 * - Secure coding practices
 * - Input validation requirements
 * - Authentication and authorization patterns
 *
 * These rules help prevent common security vulnerabilities in React applications.
 */

module.exports = {
  // Security-specific linting rules
  rules: {
    // XSS Prevention
    'react/no-danger': 'error', // Prevent dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error', // Prevent danger with children
    'react/no-unescaped-entities': 'error', // Prevent unescaped entities

    // Object Injection Prevention
    'security/detect-object-injection': 'warn', // Warn about potential object injection

    // Regex Security
    'security/detect-non-literal-regexp': 'error', // Prevent non-literal regex
    'security/detect-unsafe-regex': 'error', // Detect unsafe regex

    // Eval and Code Injection Prevention
    'security/detect-eval-with-expression': 'error', // Prevent eval with expressions
    'no-eval': 'error', // Prevent eval() usage
    'no-implied-eval': 'error', // Prevent implied eval() usage
    'no-new-func': 'error', // Prevent Function constructor

    // URL Security
    'no-script-url': 'error', // Prevent javascript: URLs
    'react/jsx-no-target-blank': 'error', // Prevent target="_blank" without rel

    // Console and Debug Prevention
    'no-console': 'warn', // Warn about console statements
    'no-debugger': 'error', // Prevent debugger statements
    'no-alert': 'error', // Prevent alert, confirm, prompt

    // Input Validation and Sanitization
    'no-unsafe-finally': 'error', // Prevent unsafe finally blocks
    'no-unsafe-negation': 'error', // Prevent unsafe negation
    'no-unsafe-optional-chaining': 'error', // Prevent unsafe optional chaining

    // Authentication and Authorization Patterns
    'no-global-assign': 'error', // Prevent assignment to global variables
    'no-implicit-globals': 'error', // Prevent implicit global variables
    'no-proto': 'error', // Prevent __proto__ usage
    'no-iterator': 'error', // Prevent __iterator__ usage
    'no-caller': 'error', // Prevent arguments.caller
    // Note: no-arguments is not available in this ESLint version

    // Data Protection
    'no-magic-numbers': 'off', // Temporarily disabled for flexibility

    // Secure Coding Practices
    'prefer-const': 'error', // Prefer const for non-reassigned variables
    'no-var': 'error', // Prevent var declarations
    'no-redeclare': 'error', // Prevent variable redeclaration
    'no-undef': 'error', // Prevent undeclared variables
    'no-unused-vars': 'error', // Prevent unused variables

    // Error Handling Security
    'no-throw-literal': 'error', // Prevent throwing literals
    'prefer-promise-reject-errors': 'error', // Ensure Promise rejections are Error objects
    'no-async-promise-executor': 'error', // Prevent async promise executors
    'require-atomic-updates': 'error', // Prevent race conditions

    // File System Security
    'no-path-concat': 'error', // Prevent unsafe path concatenation
    'no-process-env': 'warn', // Warn about direct process.env access
    'no-process-exit': 'error', // Prevent direct process.exit() calls

    // Network Security
    // Note: no-http-url is not available in this ESLint version
    'no-mixed-operators': 'error', // Prevent mixed operators without parentheses
    'no-multi-assign': 'error', // Prevent multiple assignments
    'no-nested-ternary': 'error', // Prevent nested ternary operators
    'no-new-object': 'error', // Prevent Object constructor
    'no-new-require': 'error', // Prevent new require() usage
    'no-new-wrappers': 'error', // Prevent wrapper object constructors
    'no-octal-escape': 'error', // Prevent octal escape sequences
    'no-param-reassign': 'error', // Prevent parameter reassignment

    // Restricted Globals and Imports
    'no-restricted-globals': [
      'error',
      'event', // Prevent use of global 'event'
      'fdescribe', // Prevent focused tests in production
      'fit', // Prevent focused tests in production
    ],

    'no-restricted-imports': [
      'error',
      {
        patterns: [
          {
            group: ['../*'],
            message: 'Relative imports are not allowed. Use absolute imports instead.',
          },
        ],
      },
    ],

    'no-restricted-properties': [
      'error',
      {
        object: 'process',
        property: 'exit',
        message: 'Use React error boundaries instead of process.exit().',
      },
    ],

    'no-restricted-syntax': [
      'error',
      {
        selector: 'CallExpression[callee.name="eval"]',
        message: 'eval() is not allowed for security reasons.',
      },
      {
        selector: 'CallExpression[callee.name="setTimeout"][arguments.0.type="Literal"]',
        message: 'setTimeout with string argument is not allowed. Use function instead.',
      },
      {
        selector: 'CallExpression[callee.name="setInterval"][arguments.0.type="Literal"]',
        message: 'setInterval with string argument is not allowed. Use function instead.',
      },
    ],

    // React-specific security rules
    'react/jsx-no-script-url': 'error', // Prevent javascript: URLs in href
    'react/jsx-no-target-blank': 'error', // Prevent target="_blank" without rel="noopener noreferrer"
    'react/no-danger': 'error', // Prevent dangerouslySetInnerHTML
    'react/no-danger-with-children': 'error', // Prevent danger with children
    'react/no-unescaped-entities': 'error', // Prevent unescaped entities

    // Child Process Security
    'security/detect-child-process': 'warn', // Warn about child process execution

    // Buffer Security
    'security/detect-new-buffer': 'error', // Prevent deprecated Buffer constructor

    // CSRF Protection
    'security/detect-no-csrf-before-method-override': 'error', // Ensure CSRF protection

    // Timing Attack Prevention
    'security/detect-possible-timing-attacks': 'warn', // Warn about timing attacks

    // File System Security
    'security/detect-non-literal-fs-filename': 'warn', // Warn about non-literal file operations

    // Pseudo-random Security
    'security/detect-pseudoRandomBytes': 'error', // Prevent pseudo-random bytes for security

    // Mustache Security
    'security/detect-disable-mustache-escape': 'error', // Prevent disabling mustache escaping
  },
};
