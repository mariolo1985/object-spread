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
        spread: [
            path.join(__dirname, 'src/spread.js')
        ]
    },
    output: {
        path: __dirname + '/dist',
        filename: '[name].min.js'
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
