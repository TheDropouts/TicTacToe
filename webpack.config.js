const path = requre("path");

module.exports = {
	entry: "./src/client/index.js",
	output:{
		filename = "main.js",
		path: path.resolve(__dirname, "dist")
	}
};
