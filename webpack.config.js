var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        index: [
            path.join(__dirname, 'src/index.js')
        ],
        getKeyValue: [
            path.join(__dirname, 'src/getKeyValue.js')
        ],
        spreader: [
            path.join(__dirname, 'src/spreader.js')
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loaders: 'babel-loader'
            }
        ]
    }
};
