// const webpack = require("webpack");
// const path = require("path");
// // const HtmlWebpackPlugin = require("html-webpack-plugin");
// process.env.NODE_ENV = "development";

// module.exports = {
//     mode: "development",
//     // (a)
//     target: "web",
//     devtool: "source-map",
//     entry: "./server/index.tsx",
//     // (b)
//     output: {
//         path: path.resolve(__dirname, "build"),
//         publicPath: "/",
//         filename: "bundle.js"
//     },
//     // devServer: {
//     //     // (c)
//     //     port: 7000,
//     //     proxy: {
//     //         "/api": {
//     //             target: 'http://localhost:3000',
//     //             secure: false
//     //         }
//     //     },
//     //     stats: "minimal",
//     //     overlay: true,
//     //     historyApiFallback: true,
//     //     disableHostCheck: true,
//     //     headers: { "Access-Control-Allow-Origin" : "*" },
//     //     https: false
//     // },
//     // (d)
//     plugins: [
//         new webpack.DefinePlugin({
//             "process.env.API_URL": JSON.stringify("http://localhost:5000")
//         }),
//         new webpack.HotModuleReplacementPlugin()
//         // new HtmlWebpackPlugin({
//         //     template: "src/index.html",
//         //     favicon: "src/favicon.ico"
//         // })
//     ],
//     resolve: {
//         extensions: [".js", ".jsx", ".json", ".ts", ".tsx"]
//     },
//     // (e)
//     module: {
//         rules: [
//             {
//                 test: /\.(ts|tsx)$/,
//                 exclude: /node_modules/,
//                 use: ["ts-loader"]
//             },
//             {
//                 test: /\.js/,
//                 loader: ["source-map-loader"]
//             },
//             {
//                 test: /\.svg$/,
//                 use: ["svg-inline-loader"]
//             },
//             {
//                 test: /\.(png|svg|jpg|gif)$/,
//                 use: ["file-loader"]
//             },
//             {
//                 test: /\.(pdf|jpg|png|gif|svg|ico)$/,
//                 use: [
//                     {
//                         loader: 'url-loader'
//                     }
//                 ]
//             },
//             {
//                 test: /(\.css)$/,
//                 use: ["style-loader", "css-loader"]
//             }
//         ]
//     }
// };

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



// {
//     "compilerOptions": {
//         "jsx": "react",
//         "module": "CommonJS",
//         "target": "es5",
//         "lib": [
//             "DOM",
//             "DOM.Iterable",
//             "ESNext"
//         ],
//         "rootDir": "./server",
//         "allowJs": true,
//         "skipLibCheck": true,
//         "removeComments": true,
//         "outDir": "./build/",
//         "esModuleInterop": true,
//         "allowSyntheticDefaultImports": true,
//         "strict": true,
//         "forceConsistentCasingInFileNames": true,
//         "moduleResolution": "node",
//         "resolveJsonModule": true,
//         "isolatedModules": true
//     },
//     "include": [
//         "./**/**/*"
//     ],
//     "exclude": [
//         "node_modules"
//     ]
// }