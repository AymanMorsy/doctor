const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports={
    
    module:{
        rules:[
            {
                test:/.js$/,
                use:['babel-loader'],
                exclude:/node_modules/,

            },
            {
                test:/\.(pug)$/,
                loader:'pug-loader',
                query:{
                    pretty:false
                },
                exclude:/node_modules/,
            },
            {
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
            {
                test: /\.css$/,
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
            ]
            },
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
        }),
        new HTMLWebpackPlugin({
            template:'./src/pug/about.pug',
            filename: "about.html",
        }),
        new MiniCssExtractPlugin()

    ],

}

// iexplore