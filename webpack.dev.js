const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './app/app.js',
  output: {
    publicPath: '/',
    filename: './.build/app.js',
  },
  resolve: {
    modules: [
      path.resolve('./app'),
      path.resolve('./node_modules'),
    ],
  },
  module: {
    loaders: [{
      test: /.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
    }, {
      test: /\.css$/,
      use: [
        'style-loader',
        {
          loader: 'postcss-loader',
          options: {
            parser: require('postcss-scss'),
            plugins: () => [
              require('postcss-easy-import')(),
              require('postcss-mixins'),
              require('postcss-conditionals'),
              require('postcss-nested'),
              require('postcss-simple-vars'),
              require('postcss-calc')({
                mediaQueries: true,
                precision: 10,
              }),
              require('autoprefixer')({ browsers: ['last 1 version'] }),
            ],
          },
        },
      ],
    }, {
      test: /\.(gif|png|jpe?g|svg)$/i,
      loaders: [
        'file-loader',
        {
          loader: 'image-webpack-loader',
          query: {
            progressive: true,
            optimizationLevel: 7,
            interlaced: false,
            pngquant: {
              quality: '65-90',
              speed: 4,
            },
          },
        },
      ],
    }],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
  ],
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 9000,
  },
}
