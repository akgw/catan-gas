const path = require('path');
const webpack =require('webpack');
const VueLoader = require('vue-loader');

module.exports = {
  entry: './src/main.ts',
  target: 'web',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.html'
  },
  resolve: {
    extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use :[
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: [/\.vue$/],
            }
          },
        ],
        exclude: '/node_modules/'
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: '/node_modules/'
      }
    ]
  },
  plugins: [
    new VueLoader.VueLoaderPlugin()
  ]
};