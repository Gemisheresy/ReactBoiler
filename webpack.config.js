///Example webpack config file
// npm install -s webpack babel babel-core babel-loaders babel-preset-react babel-preset-es2015 webpack-dev-server
module.exports = {
    // entry point for the webpack
    entry: './lib/app.js',
    //Where the bundle will be placed after packing
    output:{
        path:'./bin',
        filename: 'app.bundle.js'
    },
    // For production not necessary, only for dev
    devServer : {
        // for hot reloading
        inline: true,
        //localhost8080
        port: 8080

    },
    module:{
        loaders:[
            {
                //tests to see if file contains the .js file type
                test: /\.js$/,
                // doesn't go threw the node_modules directory and bundle them in
                exclude: /node_modules/,
                // linking in babel for using es6 for import class arrow functions and react
                loader: 'babel',
                query: {
                    presets: ['es2015','es2016','react'],
                    plugins: ["transform-object-rest-spread"]
                }
            }
        ]
    }
};