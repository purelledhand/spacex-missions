const { override } = require('customize-cra');

const disableForkTsCheckerWebpackPlugin = () => (config) => {
  const forkTsCheckingPluginIndex = config.plugins.findIndex(
    ({ options }) =>
      options && Object.keys(options).find((option) => option === 'tsconfig'),
  );

  // eslint-disable-next-line no-param-reassign
  config.plugins[forkTsCheckingPluginIndex].useTsIncrementalApi = false;
  return config;
};

module.exports = {
  webpack: override(disableForkTsCheckerWebpackPlugin()),
};
