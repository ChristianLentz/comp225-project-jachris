/**
 * This file is how we configure the webpack CLI 
 * 
 * We can have this run in development or production mode. Webpack will use a module 
 * bundler which removes unused code from node_modules upon building our website. 
 * 
 * This bundle that we then use to build our website is put into bundle.js
 * 
 * Use 'npm run build' or 'serve dist/' in the terminal to perform all of this, as 
 * these are currently configured to do this! Check package.json or index.html
 * 
 * Note that, in general, the main.js and bundle.js that we get from webpack is 
 * typically unreadable in our editor due to the optimizations that webpack performs, 
 * but it will be readable in the dev console (see 'devtool' below)  
 */

const path = require('path'); 

module.exports = {
    // pick a mode for webpack to run 
    mode: 'development', 
    // makes code more readable (and thus easier to debug) in the dev console 
    devtool: 'eval-source-map',
    // entry point for webpack, this is where we start the build process 
    entry: './src/index.js',
    // output file, this is where the bundled code is sent
    output: { 
        path: path.resolve(__dirname, 'dist'), 
        filename: 'bundle.js'
    }
};