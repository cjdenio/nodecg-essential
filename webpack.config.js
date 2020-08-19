const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const graphics = ['lower-thirds'];
const panels = ['lower-thirds'];

function config(directory) {
  const things = directory == 'graphics' ? graphics : panels;

  let entry = {};

  things.forEach(item => {
    entry[item] = `./src/${directory}/${item}/index.js`;
  });

  return {
    mode: 'development',
    entry,
    output: {
      filename: '[name].js',
      path: path.join(__dirname, directory),
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader',
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      ...things.map(
        item =>
          new HtmlWebpackPlugin({
            chunks: [item],
            filename: `${item}.html`,
            templateContent: `<!DOCTYPE html><html><body><div id="app"></div></body></html>`,
          }),
      ),
    ],
  };
}

module.exports = [config('graphics'), config('dashboard')];
