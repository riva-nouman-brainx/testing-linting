# React SuperLint Template

A production-ready React template with comprehensive linting rules for team development.

## 🎯 Project Overview

This project demonstrates best practices for maintaining code quality in React applications by:
- Enforcing 100+ strict ESLint rules
- Automatic code formatting with Prettier
- Pre-commit hooks that block commits with errors
- Production-ready React application with Vite
- Modular linting configuration

## 📋 Table of Contents

- [Quick Start](#-quick-start)
- [What's Included](#-whats-included)
- [Pre-Commit Hook](#-pre-commit-hook)
- [Usage Guide](#-usage-guide)
- [Linting Rules](#-linting-rules-enforced)
- [Configuration](#-configuration)
- [Bypass Commands](#-bypass-commands)
- [Troubleshooting](#-troubleshooting)

## 🚀 Quick Start

### Clone and Setup
```bash
# Clone the repository
git clone <repository-url>
cd react-superlint-template

# Install dependencies (pre-commit hooks auto-install)
npm install
```

That's it! The pre-commit hooks are now active and will run automatically.

## 📦 What's Included

### 1. **Linting Configuration**
- `.eslintrc.json` - Main ESLint configuration
- `react-linting-config/` - Modular ESLint configurations
- `.prettierrc` - Prettier formatting rules

### 2. **Pre-Commit Hook**
- **Husky v9.1.7** - Git hooks manager
- **lint-staged v16.2.3** - Runs linters on staged files only
- Automatically blocks commits with linting errors

### 3. **GitHub Actions Workflows**
- **Super Linter** - Comprehensive linting with GitHub Super Linter
- **Lint & Format** - ESLint + Prettier validation
- **Automated CI/CD** - Runs on push and pull requests

### 4. **React Application**
- Modern React 19 with Vite
- Component-based architecture
- JavaScript (not TypeScript)
- Production-ready structure

## 🔒 Pre-Commit Hook

### How It Works
1. **Automatic Installation**: Runs `npm install` → `husky install` → `husky add .husky/pre-commit`
2. **File Staging**: When you run `git commit`, lint-staged checks staged files
3. **Linting Process**: Runs ESLint and Prettier on staged files
4. **Commit Blocking**: If linting fails, the commit is blocked

### What Gets Linted
- **JavaScript/JSX files**: `src/**/*.{js,jsx}`
- **CSS files**: `src/**/*.css`
- **Markdown files**: `*.md`

## 📖 Usage Guide

### Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Check linting (without fixing)
npm run lint:check

# Format code
npm run format

# Check formatting
npm run format:check
```

### Git Workflow
```bash
# Normal development workflow
git add .
git commit -m "feat: Add new feature"
# Pre-commit hook runs automatically

# If linting fails, fix issues and try again
git add .
git commit -m "feat: Add new feature"
```

## 🛡️ Linting Rules Enforced

### Security Rules (20+ rules)
- `no-eval` - Prevents eval() usage
- `no-implied-eval` - Prevents implied eval
- `no-new-func` - Prevents Function constructor
- `no-alert` - Prevents alert() usage
- `no-process-env` - Prevents process.env usage
- `no-restricted-imports` - Restricts dangerous imports
- `security/detect-object-injection` - Prevents object injection
- And many more...

### Code Quality Rules (30+ rules)
- `complexity` - Limits cyclomatic complexity
- `max-lines` - Limits file length
- `max-lines-per-function` - Limits function length
- `max-params` - Limits function parameters
- `max-depth` - Limits nesting depth
- `sonarjs/cognitive-complexity` - Advanced complexity analysis
- And many more...

### React Rules (25+ rules)
- `react/prop-types` - Enforces prop-types
- `react/jsx-key` - Enforces key props
- `react/no-array-index-key` - Prevents array index keys
- `react/no-danger` - Prevents dangerouslySetInnerHTML
- `react-hooks/rules-of-hooks` - Enforces hooks rules
- `react-hooks/exhaustive-deps` - Enforces dependency arrays
- And many more...

### Accessibility Rules (15+ rules)
- `jsx-a11y/alt-text` - Enforces alt text
- `jsx-a11y/anchor-is-valid` - Validates anchor tags
- `jsx-a11y/click-events-have-key-events` - Keyboard accessibility
- And many more...

## 🚀 GitHub Actions CI/CD

### Automated Workflows

The template includes GitHub Actions workflows that run automatically:

#### 1. **Super Linter Workflow** (`.github/workflows/super-linter.yml`)
- Uses GitHub Super Linter for comprehensive code analysis
- Runs on: `push` and `pull_request` to `main`, `master`, `staging`, `linting-test` branches
- Validates: JavaScript, JSX, CSS, HTML, JSON, Markdown, YAML
- Uses your custom ESLint configuration (`.eslintrc.json`)

### Workflow Triggers
```yaml
on:
  push:
    branches: [ main, master, staging, linting-test ]
  pull_request:
    branches: [ main, master, staging, linting-test ]
```

### Benefits
- ✅ **Automatic Quality Checks** - No bad code reaches main branch
- ✅ **Team Consistency** - Everyone follows the same standards
- ✅ **Pull Request Validation** - Reviews are focused on logic, not style
- ✅ **Build Verification** - Ensures code compiles and works

## 🔧 Configuration

### ESLint Configuration

The template uses a modular ESLint configuration:

```
react-linting-config/
├── base.js      # Core ESLint setup
├── react.js     # React-specific rules
├── security.js  # Security-focused rules
├── quality.js   # Code quality rules
└── index.js     # Main configuration
```

### Prettier Configuration

Prettier is configured in `.prettierrc`:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf",
  "bracketSpacing": true,
  "arrowParens": "avoid",
  "bracketSameLine": false,
  "jsxSingleQuote": true,
  "quoteProps": "as-needed"
}
```

## 🚨 Bypass Commands

If you need to bypass the pre-commit hook (not recommended):

```bash
# Bypass pre-commit hook
git commit --no-verify -m "your message"

# Bypass GitHub Actions (not recommended)
git push --no-verify
```

## 🔧 Troubleshooting

### Common Issues

#### 1. **Pre-commit hook not working**
```bash
# Reinstall husky
npm run prepare
```

#### 2. **ESLint errors**
```bash
# Check ESLint configuration
npx eslint --print-config src/App.jsx

# Run ESLint manually
npx eslint src/**/*.{js,jsx}
```

#### 3. **Prettier errors**
```bash
# Check Prettier configuration
npx prettier --check src/**/*.{js,jsx,css,md}

# Format files
npx prettier --write src/**/*.{js,jsx,css,md}
```

#### 4. **GitHub Actions failing**
- Check the Actions tab in your GitHub repository
- Ensure the workflow file is in `.github/workflows/`
- Verify the branch names match the workflow triggers

### Getting Help

1. **Check the logs**: Look at the pre-commit hook output
2. **Run manually**: Test ESLint and Prettier manually
3. **Check configuration**: Verify `.eslintrc.json` and `.prettierrc`
4. **Update dependencies**: Run `npm update`

## 📊 Current Status: FULLY WORKING

✅ **Pre-commit hooks**: Working perfectly  
✅ **ESLint configuration**: 100+ rules active  
✅ **Prettier integration**: Automatic formatting  
✅ **GitHub Actions**: Automated CI/CD  
✅ **Production ready**: Clean, team-ready template  

## 🎯 Team Benefits

- **Consistent Code Quality**: Everyone follows the same standards
- **Automatic Enforcement**: No manual code reviews for style
- **Security First**: Built-in security rule enforcement
- **Accessibility**: Automatic accessibility checks
- **Performance**: Code quality rules prevent performance issues
- **Maintainability**: Clean, readable, and maintainable code

---

**Ready to use!** Clone, install, and start developing with confidence! 🚀