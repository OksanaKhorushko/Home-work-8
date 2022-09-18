const path = require('path');

module.exports = {
    entry: './public/js/comp.js',
    output: {
        path: path.resolve(path.join(__dirname, '/public/js')),
        filename: './components.js',
    },
    watchOptions: {
        poll: true,
        ignored: '/node_modules/',
    },
};
