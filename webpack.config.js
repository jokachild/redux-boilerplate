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

    resolve: {
        alias: {
            actions:    path.resolve(__dirname, "src/js/actions"),
            components: path.resolve(__dirname, "src/js/components"),
            containers: path.resolve(__dirname, "src/js/containers"),
            reducers:   path.resolve(__dirname, "src/js/reducers"),
            sass:       path.resolve(__dirname, "src/scss")
        }
    },

    plugins: [
        new webpack.optimize.OccurenceOrderPlugin()
    ],

    module: {
        preLoaders: [
            {
                test: /\.js|\.jsx?$/,
                loaders: ["eslint"],
                include: path.resolve(__dirname, "src/js"),
                exclude: /node_modules/
            }
        ],
        loaders: [
            {
                test: /\.js|\.jsx$/,
                loader: "babel",
                exclude: /node_modules/
            }
        ]
    }
};