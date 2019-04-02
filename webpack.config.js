const path = require('path')

module.exports = {
  entry: './src/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname,'dist')
  },
  devServer:{
    contentBase:'./dist'
  },
  module:{
    loaders:[
      {
        test: /\.worker\.js$/,
        use: {
          loader: 'worker-loader'
        }
      },
      {
        test: /\.vue$/,
        include: [path.resolve(__dirname, 'app')],
        exclude: [path.resolve(__dirname, 'node_modules')],
        loader: 'vue-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=250'
      },

      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
}