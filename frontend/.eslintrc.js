module.exports = {
  rules: {
    "object-curly-newline": [
      "error",
      {
        ObjectExpression: { multiline: true, minProperties: 3, consistent: true },
        ObjectPattern: { multiline: true, minProperties: 3, consistent: true },
        ImportDeclaration: { multiline: true, minProperties: 3, consistent: true },
        ExportDeclaration: { multiline: true, minProperties: 3, consistent: true }
      }
    ]
  }
};
