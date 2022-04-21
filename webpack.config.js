//https://levelup.gitconnected.com/how-to-polyfill-buffer-with-webpack-5-1b6559ab87b8
//https://viglucci.io/how-to-polyfill-buffer-with-webpack-5
//import webpack from 'webpack';
const webpack = require('webpack');
var polyfills = require('polyfills');
const path = require('path');
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")

//const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    target: 'node',
    resolve:{
        fallback: { 
            
            "http": require.resolve("stream-http"), 
            "https": require.resolve("https-browserify"),
            //"buffer": require.resolve("buffer/"),
            "buffer": require.resolve("safe-buffer/"),
            //"firebase" : require.resolve("firebase"),
            "url": require.resolve("url/"),
            "request" : require.resolve("request"),
            "util": require.resolve("util/") ,
            "assert": require.resolve("assert/"),
            "util": require.resolve("util/"),
            "crypto": require.resolve("crypto-browserify"),
            "stream": require.resolve("stream-browserify"), 
            "zlib": require.resolve("browserify-zlib"),
            "path": require.resolve("path-browserify"),
            //"process": require.resolve("process/browser")
            
        },
        alias:{
            'node_modules': path.join(__dirname, 'node_modules'),
            process : 'process/browser',
            stream : 'stream-browserify',
            zlib: 'browserify-zlib',
            //buffer : 'buffer'
        }
    },
    plugins: [
        new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
            //process:'process/browser',
        }),
        new NodePolyfillPlugin()
    ],

    mode: 'development', //Production
    entry:{
        main: path.resolve(__dirname, 'src/app.mjs'), // entry file to all our js modules
    },
    output:{
        path: path.resolve(__dirname, 'dist'), //output directory
        filename: 'bundle.js' ,
    },
    devtool: "source-map",
    devServer:{
        contentBase: "./node_modules",
    },
};