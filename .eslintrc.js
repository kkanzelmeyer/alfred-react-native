module.exports = {
  "extends": ["standard", "plugin:flowtype/recommended"],
  "plugins": [
    "react", "react-native", "standard", "promise", "flowtype"
  ],
  "parserOptions": {
    "ecmaVersion": 7,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "flowtype/boolean-style": [
      2, "boolean"
    ],
  },
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": true
    }
  }
}
