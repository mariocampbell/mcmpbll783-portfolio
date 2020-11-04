const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      glob = require('glob-all'),
      PurgeCSSPlugin = require('purgecss-webpack-plugin')

const PATHS = {
  src: path.join(__dirname, 'src'),
  public: path.join(__dirname, 'public')
}

module.exports = {

    devtool: 'source-map',

    entry: [ '@babel/polyfill', path.join(__dirname, 'src/index.js') ],

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                resolve: {
                  extensions: [ '.js', '.jsx']
                },
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [ '@babel/preset-env', '@babel/preset-react' ],
                        plugins: [ "@babel/plugin-proposal-class-properties" ]
                    }
                }
            },
            {
                test: /\.s?css$/,
                exclude: /node_modules/,
                use: [
                    'style-loader',
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                          esModule: false,
                        }
                    },
                    'css-loader?sourceMap',
                    'resolve-url-loader?sourceMap',
                    'sass-loader?sourceMap',
                    'postcss-loader?sourceMap'
                ]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { name: 'images/[name].[ext]'}
                    },
                    {
                        loader: 'image-webpack-loader',
                        options: {
                          bypassOnDebug: true, // webpack@1.x
                          disable: true, // webpack@2.x and newer
                        }
                    }
                ]
            }
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({ filename: 'css/[name].css', chunkFilename: 'css/[id].css' }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'public/index.html'),
            favicon: path.join(__dirname, 'src/images/favicon.png')
        }),
        new PurgeCSSPlugin({ paths: glob.sync([ `${PATHS.public}/**/*`, `${PATHS.src}/**/*`], { nodir: true }) }),
    ],

    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 3000,
        open: true
    }
}
