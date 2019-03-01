var path = require('path');

module.exports = {
    mode: 'development',
    entry: './index.js',
    devtool: 'source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
};