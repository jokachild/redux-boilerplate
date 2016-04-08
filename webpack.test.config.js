var path = require("path");

module.exports = {
    entry: "mocha!./test/index.js",
    output: {
        path: path.resolve(__dirname, "test"),
        filename: "bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loader: "babel-loader",
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        port: 8088
    }
};

// http://stackoverflow.com/questions/32385219/mocha-tests-dont-run-with-webpack-and-mocha-loader
// http://krasimirtsonev.com/blog/article/a-modern-react-starter-pack-based-on-webpack