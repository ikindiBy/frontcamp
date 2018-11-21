const path = require('path');
const webpack = require('webpack');

module.exports = {
	context: path.resolve(__dirname, "src"),

	mode: "development",

	entry: {
		index: "./index.js",
    },

	devtool: "source-map",

	resolve: {
		extensions: [".js"] 
	},

	output: {
		path: path.join(__dirname, "dist"),
		publicPath: '/'
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
		new webpack.HotModuleReplacementPlugin()
        ],
        
	watch: true,
}
