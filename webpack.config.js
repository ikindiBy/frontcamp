const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, "src"),

	// mode: "development",

	entry: {
		main: "./js/index.js",
    },

	devtool: "source-map",

	resolve: {
		extensions: [".js"] 
	},

	output: {
		path: path.join(__dirname, "dist"),
		publicPath: '/',
		// filename: '[name].[chunkhash].js'
	},

	module: {
		rules: [
			{
				test: /\.js?$/,
				use: [
					{
						loader: "babel-loader",	
						options: {
							presets: [
                                    [
                                    "@babel/preset-env", 
                                    {
                                        "targets": { 
                                            "browsers": ["last 2 versions", "ie >= 9"] 
                                            } 
                                    }
                                ]
                            ]
						}
					}
				],
				exclude: /(node_modules|bower_components)/,
			}, 
			{
				test: /\.s?css$/,
				use: [
						'style-loader',
						MiniCssExtractPlugin.loader,
						'css-loader',
	          			// 'sass-loader'|
				]
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'file-loader',
				options: {
					name: '[path][name].[ext]',
					outputPath: 'images/'
					// name: '[name][hash].[ext]?[hash]'
				}
			},
		]
    },
    
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					name: "commons",
					chunks: "all",
					minSize: 0,		
					minChunks: 2,	
					priority: 1,
				},
				vendor: {
					test: /node_modules/,
					name: "vendor",
					chunks: "all",
					minSize: 0,
					minChunks: 2,
					priority: 2,
				}
			}
		}
	},

	plugins: [
		new CaseSensitivePathsPlugin(),
		new HtmlWebpackPlugin({
				inject: false,
				hash: true,
				template: './index.html',
      			filename: 'index.html'
			}),
		new MiniCssExtractPlugin({
				filename: "style.css",
				// filename: 'style.[contenthash].css',
			}),
		new webpack.HotModuleReplacementPlugin()
	],

	devServer: {
		hot: true,
		historyApiFallback: true
	},
        
	watch: true,
}
