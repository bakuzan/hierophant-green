const path = require(`path`);

exports.onCreateNode = require('./gatsby/onCreateNode');
exports.createPages = require('./gatsby/createPages');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '*': path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  });
};
