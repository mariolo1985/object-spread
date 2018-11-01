var webpack = require('webpack');
var path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        index: [
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [/node_modules/],
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [
                            '@babel/plugin-proposal-export-default-from',
                            '@babel/syntax-object-rest-spread'
                        ]
                    }
                }
            }
        ]
    }
};
