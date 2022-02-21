const path = require('request');
//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'node',
    resolve:{
        fallback: { 
            "util": require.resolve("util/") ,
            "assert": require.resolve("assert/"),
            "https": require.resolve("https-browserify"),
            "url": require.resolve("url/"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"), 
            "zlib": require.resolve("browserify-zlib"),
            "path": require.resolve("path-browserify"),
            "http": require.resolve("stream-http")   
        }
    },
    mode: 'development', //Production
    entry:{
        main: './ide.mjs' //input directory
    },
    output:{
        path: '/home/ub1/Desktop/CodeClass/Code-Class.github.io/build', //output directory
        filename: 'bundle.js' ,
    },
    devServer:{
        contentBase: "./node_modules",
    }
};