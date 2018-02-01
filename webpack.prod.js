const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry: './app/app.js',
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, '.build'),
    publicPath: '/',
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
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
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
              require('cssnano')(),
            ],
            hmr: false,
          },
        }],
      }),
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
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './app/index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
    }),
    new ExtractTextPlugin({
      filename: 'app.css',
    }),
  ],
}
