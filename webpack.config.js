const webpack = require("webpack");
process.env.NODE_ENV === "development";

module.exports = {
    mode: "development",
    target: "web",
    devtool: "source-map",
    entry: {
        client: "./client/client.tsx"
    },
    output: {
        filename: "[name].js"
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "ts-loader"
                }
            },
            {
                test: /\.js/,
                loader: ["source-map-loader"]
            },
            {
                test: /\.svg$/,
                use: ["svg-inline-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(pdf|jpg|png|gif|svg|ico)$/,
                use: ["url-loader"]
            },
            {
                test: /(\.css)$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
};


// const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
        // new webpack.DefinePlugin({
        //     "process.env.API_URL": JSON.stringify("http://localhost:5000")
        // }),
        // new HtmlWebpackPlugin({
        //     template: "src/index.html",
        //     favicon: "src/favicon.ico"
        // })

    // devServer: {
    //     // (c)
    //     port: 7000,
    //     proxy: {
    //         "/api": {
    //             target: 'http://localhost:3000',
    //             secure: false
    //         }
    //     },
    //     stats: "minimal",
    //     overlay: true,
    //     historyApiFallback: true,
    //     disableHostCheck: true,
    //     headers: { "Access-Control-Allow-Origin" : "*" },
    //     https: false
    // },
    // (d)

// ,
//  "babel": {
//   "presets": [
//    "babel-preset-react-app"
//   ]
//  },
//  "eslintConfig": {
//   "extends": [
//    "plugin:@typescript-eslint/recommended",
//    "plugin:react/recommended",
//    "plugin:import/errors",
//    "plugin:import/warnings"
//   ],
//   "parser": "@typescript-eslint/parser",
//   "parserOptions": {
//    "ecmaVersion": 2020,
//    "sourceType": "module",
//    "ecmaFeatures": {
//     "jsx": true
//    }
//   },
//   "env": {
//    "browser": true,
//    "node": true,
//    "es6": true
//   },
//   "rules": {
//    "no-debugger": "off",
//    "no-console": "off",
//    "no-unused-vars": "warn",
//    "react/prop-types": "warn"
//   },
//   "settings": {
//    "react": {
//     "version": "detect"
//    }
//   }
//  },
//  "type": "module"
// }