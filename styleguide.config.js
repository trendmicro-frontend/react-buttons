const path = require('path');

module.exports = {
	title: 'React Buttons',
	styleguideDir: 'docs/',
	webpackConfig: require('./webpack.config.js'),
	components: ['src/*.jsx', 'examples/Example.jsx'],
	ribbon: {
		url: 'https://github.com/trendmicro-frontend/react-buttons',
		text: 'Fork me on GitHub'
	},
	require: [
		'babel-polyfill',
    	path.join(__dirname, 'node_modules/trendmicro-ui/dist/css/trendmicro-ui.css'),
    	path.join(__dirname, 'dist/react-buttons.css'),
    	path.join(__dirname, 'node_modules/font-awesome/css/font-awesome.min.css')
	],
	theme: {
		maxWidth: '100%'
	}
};