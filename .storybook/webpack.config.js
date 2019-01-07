const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = storybookBaseConfig => {
  storybookBaseConfig.module.rules.push(
    {
      test: /\.(js|jsx)$/,
      enforce: "pre",
      loader: require.resolve("eslint-loader"),
      include: path.resolve(__dirname, "./../components")
    },
    {
      test: /\.(js|jsx)$/,
      loader: require.resolve("stylelint-custom-processor-loader"),
      exclude: /node_modules/
    },
    {
      test: /\.css$/,
      use: [
        {
          loader: MiniCssExtractPlugin.loader
        },
        {
          loader: require.resolve("css-loader"),
          options: {
            importLoaders: 1,
            sourceMap: true
          }
        },
        {
          loader: require.resolve("postcss-loader"),
          options: {
            ident: "postcss",
            sourceMap: true
          }
        }
      ]
    }
  );
  storybookBaseConfig.plugins.push(
    new MiniCssExtractPlugin({
      filename: "[name].css"
    })
  );

  return storybookBaseConfig;
};
