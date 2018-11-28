const path = require('path');
const webpack = require('webpack');
const argv = require('yargs').argv;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CaseSensitivePathsPlugin = require("case-sensitive-paths-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const isDevelopment = argv.mode === 'development';
const isProduction = !isDevelopment;
const distPath = path.join(__dirname, '/public');

module.exports = {
	context: path.resolve(__dirname, "src"),

	entry: {
		main: "./js/startPoint.js",
    },

	devtool: "source-map",

	resolve: {
		extensions: [".js"] 
	},

	output: {
		filename: 'main.js',
		path: distPath,
		chunkFilename: '[name].bundle.js',
		// path: path.join(__dirname, "dist"),
		// publicPath: '/',
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
							],
							plugins: ['@babel/plugin-syntax-dynamic-import']
						}
					}
				],
				exclude: /(node_modules|bower_components)/,
			}, 
			{
				test: /\.s?css$/,
				use: [
						isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
						'css-loader',
	          			// 'sass-loader'|
				]
			},
			{
				test: /\.(png|jpg|gif)$/i,
				use: [
						{
							loader: 'file-loader',
							options: {
								name: 'images/[name][hash].[ext]',
								// outputPath: 'images/'
								// name: '[name][hash].[ext]?[hash]'
							}
						},
					],
			},
		]
	},
    
	optimization: isProduction ? {
		minimizer: [
			new UglifyJsPlugin({
			  sourceMap: true,
			  uglifyOptions: {
				compress: {
				  inline: false,
				  drop_console: true
				},
			  },
			}),
		  ],
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
	} : {},

	plugins: [
		new CleanWebpackPlugin(['pulic']),
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
	
	devtool: 'sorce-map',
	devServer: {
		contentBase: distPath,
		port: 9000,
		compress: true,
		open: true
	},
        
	watch: true,
}
