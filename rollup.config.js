import { nodeResolve } from '@rollup/plugin-node-resolve';

export default{
    input: 'src/app.mjs',
    //input: 'src/compiler.mjs',
    output: {
        file: 'dist/bundle.js',
        //file: 'dist/compiler.js',
        format:'cjs',
        inlineDynamicImports: true
    },
    plugins: [nodeResolve()]
}


//https://stackoverflow.com/questions/38637220/how-to-include-use-of-node-modules-in-rollup-compile