module.exports = {
    entry: {
    	"foo/entry":"./entry.js",
    	"bar/hello":"./hello.js",
    	"componentsample/componentsample":"./componentsample.js"
    },
    output: {
        path: __dirname,
        filename: "[name].js"
    },
//  entry: './src/main.js',
//  output: {
//      path: __dirname,
//    path: "./build",
//    filename: 'build.js'
//  },
    module: {
	    loaders: [
	      { test: /\.css$/, loader: 'style-loader!css-loader' },
	      { test: /\.vue$/, loader: 'vue-loader' }
//	      { test: /\.css$/, loader: 'style-loader!css-loader'}
	    ]
    }
};