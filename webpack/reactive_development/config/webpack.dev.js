const path = require('path')

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  mode: 'development',
  output: {
    filename: '[name]-bundle.js', // the name will become path in entry
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/'
  },
  devServer: {
		contentBase: 'dist',
		overlay: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          { loader: 'babel-loader' }
        ],
        exclude: /node_modules/
      }, 
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },{ loader: 'css-loader' },
        ]
      }, 
      {
        test: /\.(png|jpg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "images/[name]-[hash:8].[ext]"
            }
          }
        ]
      },
			{
        test: /\.html$/,
        use: [
					{ loader: 'file-loader', options: {name: '[name].html'}},
					{ loader: 'extract-loader' },
					{ loader: 'html-loader' }
        ]
      }
    ]
  }
}