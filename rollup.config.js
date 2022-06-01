//import babel from 'rollup-plugin-babel';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import includePaths from 'rollup-plugin-includepaths';
//import { resolve } from 'path-browserify';

let includePathOptions = {
    include: {},
    paths: ['node_modules/request/lib/helpers', 'node_modules/request/lib/cookies'],
    external: [],
    extensions: ['.js', '.json', '.html', 'mjs']
};



export default{
    input: 'src/app.mjs',
    //input: 'src2/App2.mjs',
    output: {
        file: 'public/site-InstructorIDE/bundle.js',
        //file: 'dist2/bundle.js',
        format:'cjs',
        inlineDynamicImports: true
    },
    plugins: [nodeResolve({jsnext: true}),
        commonjs(),
        includePaths(includePathOptions)
       //babel(),
       //peerDepsExternal({
           //includeDependencies: true,
   // }),
    /*resolve({
        jsnext: true,
        main: true,
        browser: true,
      }),
      commonjs()*/
    ],
    
}


//https://stackoverflow.com/questions/38637220/how-to-include-use-of-node-modules-in-rollup-compile