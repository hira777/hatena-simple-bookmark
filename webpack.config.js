const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: {
    app: './src/app.js',
  },
  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'docs/'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env'],
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            js: 'babel-loader?presets[]=env',
          },
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-plain-loader',
      },
      {
        test: /\.stylus/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader'],
      },
    ],
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.esm.js',
    },
  },

  plugins: [new VueLoaderPlugin()],
};
