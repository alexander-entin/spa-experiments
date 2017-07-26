// Require all files in ~/app, excluding main.js
const srcContext = require.context('../app', true, /^((?!main).)*\.(js|jsx)/);
srcContext.keys().forEach(srcContext);
