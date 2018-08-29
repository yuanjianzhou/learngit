const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');//html插件，需要安装依赖项 npm install htmp-webpack-plugin --save-dev
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//压缩css文件
module.exports = {
    entry:{
        main: path.join(__dirname,"../src/index.jsx"),//入口文件
        common:['react','react-dom']
    },
    output:{
        path:path.join(__dirname,"../build"),//出口文件
        filename:"[name].js",

    },
    resolve:{
        extensions:['.js','.jsx','.json','.css','.less','sass','scss'],//需要编译的文件类型
    },
    performance: {
        hints: false
    },
    module:{
        rules:[
            {
                test: /\.(js|jsx)?$/,
                exclude:/(node_modules)/,
                loader:'babel-loader'//jsx js转码配置
            },
            {
                test: /\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader'],//css转码，需要安装依赖项css-loader
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                    loader: "css-loader" // 将 CSS 翻译成 CommonJS
                }, {
                    loader: "sass-loader" // 将 Sass 转换成 CSS
                }]

            },
            {
                test:/\.html$/,
                use:[
                    {
                        loader:'html-loader',
                        options: {minimize: true}
                    }
                ]
            },
            {
                test: /\.(ico)$/,
                use:"raw-loader",//加载ico文件
            },
            {
                test:/\.(svg|png|ico)$/,
                use:'file-loader',//加载文件
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: path.join(__dirname, "../public/index.html")
        }),
       new MiniCssExtractPlugin({
           filename: "[name].css",
           chunkFilename: "[id].css"
       })
    ]
}
