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
                    pretty:true
                },
                exclude:/node_modules/,
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                use:[
                    {
                        loader:'file-loader',
                        options:{
                            name:'[name].[ext]',
                            outputPath:'imgs'
                        }
                    }
                ]
            },
        ]
    },

    plugins:[
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template:'./src/home.pug',
            filename: "index.html",
        }),
        new HTMLWebpackPlugin({
            template:'./src/about.pug',
            filename: "about.html",
        }),
        new MiniCssExtractPlugin(),

    ],

}