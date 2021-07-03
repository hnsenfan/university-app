module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
    es6: true,
    node: true,
    "jest/globals": true
  },
  plugins: ["jest"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "key-spacing"          : 0,
    "object-curly-spacing" : [2, "always"],
    "no-trailing-spaces"   : "warn",
    "no-unused-vars"       : "warn",
    "semi"                 : [2, "never"],
    "handle-callback-err"  : "warn",
    "no-unreachable"     : "warn",
    "no-labels"           : "warn",
    "react/jsx-no-duplicate-props" : "warn",
    "react/jsx-indent"     : ["warn", 2],
    "react/react-in-jsx-scope": "off"
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  globals: {
    ADA_URL: true,
    CURRENCY: true,
    NODE_ENV: true,
    LOCALE_CODE: true,
    COUNTRY: true,
    TEXT_KEY: true,
    LANG_CODE: true,
    COUNTRY_CODE: true,
    DOMAIN: true,
    COUNTRY_NAME: true
  },
}