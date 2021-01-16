const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');

    const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = {
    entry: PATHS.source + "/useToggle.js",
    output: {
        path: PATHS.build,
        filename: "[name].js",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
};

const developmentConfig = {
    devServer: {
        stats: 'errors-only',
        port: 9000
    }
};

module.exports = function (env) {
    if (env === 'production') {
        return common;
    }
    if (env === 'development') {
        return Object.assign(
            {},
            common,
            developmentConfig
        )
    }
};