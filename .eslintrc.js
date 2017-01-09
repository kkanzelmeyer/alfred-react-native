module.exports = {
    "extends": "standard",
    "plugins": [
        "react",
        "react-native",
        "standard",
        "promise",
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
     }
};
