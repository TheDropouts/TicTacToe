const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	entry: "./src/client/index.js",
	output:{
		filename : "main.js",
		path: path.resolve(__dirname, "dist")
	},
	plugins :[
		new HtmlWebpackPlugin({
			template: "./src/client/index.html"
		 })
	
	],
	devServer:{
		port:3001,
		open: true,
		proxy: {
			"/api" : "http://localhost::3000"
		}
	}
};
