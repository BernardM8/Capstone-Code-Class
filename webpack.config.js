const path = require('request');

module.exports = {
    resolve:{
        fallback: { "util": require.resolve("util/") }
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