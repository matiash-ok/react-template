/* eslint-disable */

const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require('webpack')

module.exports ={
        entry: "./src/index.js",
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: "bundle.js",
          clean: true,
        },
        devServer:{
          hot: true,
          port: 8000,
          compress: true,
          historyApiFallback: true,
          allowedHosts: "all",
        },
        resolve: {
          extensions: [".js", ".jsx"],
        },
        module: {
          rules: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/, /\.webp$/],
              type: 'asset',
              parser: {
                dataUrlCondition: {
                  maxSize: 20000,
                },
              }
            },
            {
              test: /\.svg$/,
              use: [
                {
                  loader: 'svg-url-loader',
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
            {
              test: /\.s[ac]ss$/i,
              use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              // Compiles Sass to CSS
              "sass-loader",
              ],
            },
            {
              test: /\.css$/i,
              use: [
              // Creates `style` nodes from JS strings
              "style-loader",
              // Translates CSS into CommonJS
              "css-loader",
              ],
            },
			{
				test: /\.(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader:"ts-loader"
					},
					{
						loader: "babel-loader",
						options:{
							presets:['@babel/preset-env','@babel/preset-react','@babel/preset-typescript']
						}
		
					}
			]
			},
            {
              test: /\.(js|jsx)$/,
              exclude: /node_modules/,
              use: {
                loader: "babel-loader",
				options:{
					presets:['@babel/preset-env','@babel/preset-react']
				}

              },
            },
            {
              test: /\.html$/,
              use: [
                {
                  loader: "html-loader",
                },
              ],
            },
          ],
        },
        plugins: [
          new HtmlWebPackPlugin({
            template: "./public/index.html",
            filename: "./index.html",
          }),
        ],
      }
