const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const shouldAnalyze = process.argv.includes('--analyze');
const plugins = []

if(shouldAnalyze){
    plugins.push(new BundleAnalyzerPlugin());
}
plugins.push(new HtmlWebpackPlugin({
    inject: true,
    template: './public/index.html',
    filename: './index.html'
}));

plugins.push(new MiniCssExtractPlugin({
    filename: '[name].css'
}));

plugins.push(new CopyWebpackPlugin({
    patterns: [{
        from: './src/assets/',
        to: './assets'
    }],
}));


module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].main.js',
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader',
                ]
            },
        ],
    },
    plugins,
    optimization: {
        minimize: true,
        minimizer: [
            new CssMinimizerPlugin(),
            new TerserPlugin(),
        ],
        splitChunks: {
            chunks: 'all',
        },
    }
}