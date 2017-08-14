module.exports = {
    entry: {
    	"foo/entry":"./entry.js",
    	"bar/hello":"./hello.js",
    },
    output: {
        path: __dirname,
        filename: "[name].min.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    }
};