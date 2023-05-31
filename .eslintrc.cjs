module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb/base",
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:prettier/recommended"
    ],
    "overrides": [
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "project": "./tsconfig.json",
        "ecmaFeatures": {
          "jsx": true
        }
    },
    "plugins": [
        "react",
        "react-hooks",
        "@typescript-eslint",
        "prettier",
        "import",
        "jsx-a11y"
    ],
    "rules": {
      "react/react-in-jsx-scope": ["off"],
      "react/jsx-uses-react": ["off"],
      "react/jsx-props-no-spreading": ["warn"],
      "react/no-unescaped-entities": ["off"],
      "camelcase": "error",
      "spaced-comment": "error",
      "quotes": ["error", "single"],
      "no-duplicate-imports": "error",
      "import/no-unresolved": "[2, {commonjs: true, amd: true}]",
      "import/named": "2",
      "import/namespace": "2",
      "import/default": "2",
      "import/export": "2",
      "additional-rule": "warn",
    },
    "overrides": [
      {
        "files": [
          "**/*.ts?(x)"
        ],
        "rules": {
          "additional-typescript-only-rule": "warn"
        }
      }
    ],
    "settings": {
      "import/resolver": {
        "typescript": {
          "alwaysTryTypes": true,
          "project": "./tsconfig.json"
        },
        "import/extensions": [
          ".ts",
          ".tsx"
        ],
        "node": true,
        "typescript": true,
      },
      "import/parsers": {
        "@typescript-eslint/parser": [".ts", ".tsx"]
      }
    },
}
