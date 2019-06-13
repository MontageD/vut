process.env.NODE_ENV = 'development'

const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const baseConfig = require('./base.conf')
const root = path.resolve(__dirname, '..')

module.exports = merge(baseConfig, {
  entry: [
    'webpack/hot/dev-server', // 热替换处理入口文件
    path.resolve(root, 'example/main.js')
  ],
  output: {
    path: path.resolve(root, 'dist'), // 出口目录
    // publicPath: '/dist/',
    filename: '[name].js'
  },
  devServer: {
    historyApiFallback: true, // 404的页面会自动跳转到/页面
    inline: true, // 文件改变自动刷新页面
    host: 'localhost',
    // 是否对打包的内容进行压缩
    compress: false,
    port: 3800 // 服务器端口
    // devtool: 'source-map',// 用于标记编译后的文件与编译前的文件对应位置，便于调试
  },
  resolve: {
    // 声明前缀
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(root, 'example'),
      'temp': path.resolve(root, 'src')
    }
  },
  plugins: [
    // new webpack.optimize.CommonsChunkPlugin({
    //     name: 'main',
    //     filename: 'main.js'
    // }),
    new webpack.HotModuleReplacementPlugin(),
    // 入口的html和导入的js 的文件位置
    new HtmlWebpackPlugin({
      template: path.resolve(root, 'example/index.html'),
      inject: 'body', // js的script注入到body底部
      minify: {
        removeComments: true,
        collapseWhitespace: true
      }
    })
  ]
})
