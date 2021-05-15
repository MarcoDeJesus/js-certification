const Path = require('path');

const config = {
    entry: {
        app: ['babel-polyfill', './client/js/app']
    },
    output: {
        path: Path.resolve(__dirname, './build'),
        filename: '[name]-bundle.js'
    },
    // devtool: 'source-map',
    // module: {
    //     loaders: [{
    //         test: /\.js$/,
    //         include: [
    //             Path.resolve(process.cwd(), 'client/js')
    //         ],
    //         loader: 'babel',
    //         query: {
    //             presets: ['es2015']
    //         }
    //     }, {
    //         test: /\.jade$/,
    //         loader: 'jade-html-loader'
    //     }, {
    //         test: /\.jade$/,
    //         loader: 'raw-loader'
    //     }]
    // },
    module: {
        rules: [
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [
                Path.resolve(process.cwd(), 'client/js')
            ], 
            // query: {
            //     presets: ['es2015']
            // }
        },
        {
            test: /\.jade$/,
            use: ['raw-loader', 'jade-html-loader'],
            include: [
                Path.resolve(process.cwd(), 'client/views')
            ]
        },      
    ]
    },
    resolve: {
        extensions: ['', '.js'],
        modules: ['node_modules']
    },
    mode: 'development'
}

module.exports = config;