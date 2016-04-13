var path = require("path");

module.exports = {
    entry: "mocha!./test/index.js",
    output: {
        path: path.resolve(__dirname, "test"),
        filename: "test-bundle.js"
    },
    devtool: "inline-source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ["isparta"],
                include: path.resolve("src/js/")
            },
            {
                test: /\.spec\.js$/,
                loader: "babel",
                include: path.resolve("test/unit/")
            }
        ]
    },
    devServer: {
        port: 8088
    }
};

// http://stackoverflow.com/questions/32385219/mocha-tests-dont-run-with-webpack-and-mocha-loader
// http://krasimirtsonev.com/blog/article/a-modern-react-starter-pack-based-on-webpack