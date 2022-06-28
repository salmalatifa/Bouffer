// eslint-disable-next-line import/no-extraneous-dependencies
const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

module.exports = merge(common, {
    mode: 'development',
    devServer: {
        open: true,
        port: 8081,
        contentBase: path.resolve(__dirname, 'dist'),
        client: {
            overlay: {
                errors: true,
                warnings: true,
            },
        },
        compress: true,
    },
});