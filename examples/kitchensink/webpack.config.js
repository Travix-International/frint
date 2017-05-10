module.exports = {
  entry: {
    core: __dirname + '/core/index.js',
    'app-color': __dirname + '/app-color/index.js',
    'app-counter': __dirname + '/app-counter/index.js',
    'app-reversed': __dirname + '/app-reversed/index.js',
    'app-todos': __dirname + '/app-todos/index.js'
  },
  devtool: 'source-map',
  output: {
    path: __dirname + '/build/js',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        query: {
          presets: [
            'travix'
          ]
        }
      }
    ]
  },
  externals: {
    'frint': 'Frint',
    'frint-model': 'FrintModel',
    'frint-react': 'FrintReact',
    'frint-store': 'FrintStore',
    'react': 'React',
    'react-dom': 'ReactDOM',
    'rxjs': 'Rx'
  }
};