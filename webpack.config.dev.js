const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// declare node environment
process.env.NODE_ENV = 'development'

module.exports = {
	// webpack knows to run in dev mode, disables some production-only features
	mode: 'development',
	// set node if using webpack to build an app running in node,
	target: 'web',
	// source maps let us see our code when debugging in the browser
	devtool: 'cheap-module-source-map',
	// entry point
	entry: './src/index',
	// where we want webpack to output - note: webpack doesn't output code in dev mode, it serves it from memory
	output: {
		// __dirname a variable that gives us the current directory name, "build" - although its not actually gonna be writing a file to build, in memory its gonna be serving from this directory
		path:path.resolve(__dirname, "build"),
		// specifices the public URL of the output directory when it's referenced in the browser
		publicPath: '/',
		// again, it won't be generating a file, but webpack will be serving this from memory.
		filename: 'bundle.js'
	},
	
	// since we'll use webpack to serve our app in development:
	devServer: {
		// reduces information being written to command line
		stats: 'minimal',
		// overlay any errors that occuer in the browser
		overlay: true,
		// all requests will be sent to index.html - this way we can load deep links and handle by React Router
		historyApiFallback: true,
		// these 3 due to open issue in webpack
		disableHostCheck: true,
		headers: {"Access-Control-Allow-Origin": "*"},
		https: false
	},
	plugins: [
		// for plugins you specifiy an array, we will use HtmlWebpackPlugin that is imported at the top
		// accepts an object to configure the plugin
		new HtmlWebpackPlugin({
			// where to find our HTML template
			template: "src/index.html",
			// where to find our favicon
			"favicon": "src/favicon.ico"
		})
	],
	// we tell webpack what files we want to handle
	module: {
		//we do that by declaring an array of rules
		rules: [
			{
				// first rule for js, so we will tell it how to find our js/jsx files (regex)
				test: /\.(js|jsx)$/,
				// ignore node_modules since we don't need it to proccesss any files in node modules
				exclude: /node_modules/,
				// tell webpack what to do with these js files, we want to run babel on these files
				use: ["babel-loader"]
			},
			// process CSS
			{
				test: /(\.css)$/,
				// this combination will allow us to import css and webpack will bundle all CSS to single file.
				use: ["style-loader", "css-loader"]
			}
		]
	}
}


