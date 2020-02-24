const path = require('path');
const webpack = require('webpack');

const loaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              // This is a feature of `babel-loader` for Webpack (not Babel itself).
              // It enables caching results in ./node_modules/.cache/babel-loader/
              // directory for faster rebuilds.
              cacheDirectory: true,
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                {
                  plugins: ['@babel/plugin-proposal-class-properties'],
                },
              ],
            },
          },
        ],
      },
    
  {
      //add less to loaders
    // Rules for SCSS files. Loaders run in reverse order
    test: /\.(scss)$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
      },
      {
        loader: 'sass-loader',
      },
    ],
  }
];

module.exports = {
  mode: 'production',
  entry: './src/index.js',
  output: {
    publicPath: './',
    path: path.resolve(__dirname, './build'),
    filename: 'index.js',
    //chunkFilename: '[name][chunkhash].bundle.js',
    library: 'devt',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1,
    }),
  ],
  module: {
    rules: loaders,
  },
  node: {
    net: 'empty',
    tls: 'empty',
    dns: 'empty',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
        react: path.resolve(__dirname, './node_modules/react'),
      },
  },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React',
    },
    "react-dom": {          
        commonjs: "react-dom",          
        commonjs2: "react-dom",          
        amd: "ReactDOM",          
        root: "ReactDOM"      
    }
  },
  optimization: {
    minimize: true,
    namedModules: true,
    // runtimeChunk: 'single',
    // splitChunks: {
    //   cacheGroups: {
    //     vendors: {
    //       test: /[\\/]node_modules[\\/]/,
    //       name: 'vendors',
    //       enforce: true,
    //       chunks: 'all',
    //     },
    //   },
    // },
  }
};