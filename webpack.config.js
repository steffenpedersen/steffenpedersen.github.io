const path = require('path');

module.exports = {
    entry: './assets/js/entry.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'assets/js')
    }
};
