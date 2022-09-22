const path = require('path');
const HTMLPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './index.js',
  context: path.resolve(__dirname, 'src'),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'public')
  },
  mode: 'development',
  module: {
    rules: [
      {  test: /\.js$/,
   exclude: /node_modules/,
   use: {
       loader: 'babel-loader',
       options: {
           presets: ['@babel/preset-env']
       }
     } 
    }
   ]
  },
  plugins: [
    new HTMLPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name(module, chunks, cacheGroupKey) {
        const moduleFileName = module
          .identifier()
          .split('/')
          .reduceRight((item) => item);

        return moduleFileName.replace(/\.\w+$/, '');
      },
    }
  }
};
