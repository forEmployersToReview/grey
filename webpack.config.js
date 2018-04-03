const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: [/\.scss/, /\.css$/],
                loader: 'style-loader!css-loader!sass-loader'
            }
        ]
    },
    devServer: {
        contentBase: './src'
    }
};
