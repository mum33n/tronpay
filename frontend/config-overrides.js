const webpack = require("webpack");

module.exports = function override(config, env) {
  //do stuff with the webpack config...
  config.plugins = [
    ...config.plugins,
    // Work around for Buffer is undefined:
    // https://github.com/webpack/changelog-v5/issues/10
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
    }),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
    // new NodePolyfillPlugin(),
  ];
  config.resolve.fallback = {
    ...config.resolve.fallback,
    https: require.resolve("https-browserify"),
    zlib: require.resolve("browserify-zlib"),
    assert: require.resolve("assert/"),
    http: require.resolve("stream-http"),
    url: require.resolve("url/"),
    stream: require.resolve("stream-browserify"),
  };

  return config;
};
