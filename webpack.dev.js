const path = require("path");
const { merge } = require("webpack-merge")
const common = require("./webpack.config")

module.exports = merge(common, {
    mode: "development",
    devServer: {
        inline: true,
        port: 8008
    },
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ]
    }
});
