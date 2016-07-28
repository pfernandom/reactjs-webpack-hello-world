var webpack = require("webpack");

module.exports = {
	output: {
		filename: '[name].js',
	},
	module: {
		loaders: [
			{ 
				test: /\.css$/, 
				loader: 'style!css' 
			},
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel',
				query:{
					presets: ['react', 'es2015']
				}
			}
		]
	},
	plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        })
    ]
}