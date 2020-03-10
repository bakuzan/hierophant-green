const path = require(`path`);

exports.onCreateNode = require('./gatsby/onCreateNode');
exports.createPages = require('./gatsby/createPages');

exports.onCreateWebpackConfig = ({ actions, getConfig, stage, loaders }) => {
  const config = getConfig();

  const { rules } = config.module;
  const eslintLoader = rules.find((x) => x.enforce === 'pre');
  const leaveAlone = rules.filter((x) => x.enforce !== 'pre');

  config.module.rules = [
    ...leaveAlone,
    {
      ...eslintLoader,
      include: path.resolve(__dirname)
    }
  ];

  actions.replaceWebpackConfig(config);

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '*': path.resolve(__dirname, 'src'),
        '@': path.resolve(__dirname, 'src')
      }
    }
  });

  // if (stage === 'build-html') {
  //   actions.setWebpackConfig({
  //     module: {
  //       rules: [
  //         {
  //           test: /ayaka\/localStorage/,
  //           use: loaders.null()
  //         }
  //       ]
  //     }
  //   });
  // }
};
