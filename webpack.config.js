var path = require("path");
var webpack = require("webpack");

module.exports = {

    devtool: "source-map",

    entry: {
        main: path.resolve(__dirname, "src/js/index.js")
    },

    output: {
        path: path.resolve(__dirname, "dist"),
        publicPath: "/static/",
        filename: "bundle.js"
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
        loaders: [
            { test: /\.js$/, loader: "babel", exclude: /node_modules/, include: __dirname }
        ]
    }
};