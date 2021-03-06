const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports={
    
    module:{
        rules:[
            {
                // using bable to transpile to es5 //
                test:/.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
                exclude:/node_modules/,
                
            },
            {
                // compile pugjs to HTML //
                test:/\.(pug)$/,
                loader:'pug-loader',
                query:{
                    pretty:true
                },
                exclude:/node_modules/,
            },
            {
                // compile SCSS to css //
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, 
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, 
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: function () { 
                            return [
                                require('autoprefixer')
                            ];
                            }
                        }
                    },
                    {
                        loader: 'resolve-url-loader'
                    }, 
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        }
                    } 
            ]
            },
            // {
            //     test: /\.css$/,
            //     use: [
            //         MiniCssExtractPlugin.loader, 
            //         {
            //             loader: 'css-loader',
            //             options: {
            //                 sourceMap: true
            //             }
            //         }, 
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 sourceMap: true,
            //                 plugins: function () { 
            //                     return [
            //                       require('autoprefixer')
            //                     ];
            //                   }
            //             }
            //         }, 
            // ]
            // },
            {
                test:/\.(png|jpe?g|gif|webp)$/i,
                use:[
                    {
                        // this loader for images in css or js
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'imgs'
                        }
                    }
                ]
            },
            {
                test:/\.(woff|ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/i,
                use:[
                    {
                        loader:'url-loader',
                        options:{
                            name: '[name].[ext]',
                        }
                    }
                ]
            },
        ]
    },
    devtool:"source-map",
    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:'./src/pug/home.pug',
            filename: "index.html",
            minify:false
        }),
        new HTMLWebpackPlugin({
            template:'./src/pug/about.pug',
            filename: "about.html",
            minify:false
        }),
        new MiniCssExtractPlugin(),
        new webpack.DefinePlugin({
            // declaring global variable
            $:eval(JSON.stringify('document.querySelector.bind(document)')),
            $$:eval(JSON.stringify('document.querySelectorAll.bind(document)'))
        })

    ],

}

// iexplore