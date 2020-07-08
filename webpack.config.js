const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/scripts.js',
  devtool: "source-map",
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'foo.bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(jpg|png)$/,
        use: ["url-loader"]
      }
    ]
  }
};