module.exports = function(api) {
  api.cache.never();

  return {
    presets: [
      ["@babel/preset-env", { loose: true, modules: false }],
      "@babel/preset-react"
    ],
    plugins: ["@babel/plugin-proposal-class-properties"]
  };
};
