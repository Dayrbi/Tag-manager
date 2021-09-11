
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
    entry: './src/App/index.js', 
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            {test: /\.html$/i, loader: "html-loader" },
            {test: /\.(png|jpe?g|gif)$/i, use: [{  loader: 'file-loader'}]},
         
          ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'

      },

    devServer: {
        historyApiFallback: true,
        open: true,
        // overlay: true,
        compress: true,
        hot: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Test task',
          template: path.resolve(__dirname, './src/template.html'),
          filename: 'index.html', 
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
      ],
      mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',

}