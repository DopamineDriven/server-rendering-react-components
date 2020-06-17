# server-rendering-react-components

## Server Rendering
- slower client devices aren't detrimental
- however, full functionality of app activates after react is fully loaded 
    - ie, a few seconds after the framework of app appears
- Costs
    - Additional backend logic
        - more code than a CSR app
    - Additional tooling
        - express
        - webpack
            - this translates into additional vectors for bugs to appear
    - Some code may run differently on the server
        - can result in inconsistency
        - example -> client package is a different version than server package -> component mismatch
    - Additional server workload
        - results in increased (usually minimal) costs
        - increased cost becomes more apparent with high traffic, large-scale applications
- Benefits
    - More logic localized on server
        - reduces code sent to client
        - example -> presentational elements can be included strictly on the server
        - moreover all logic sent to client at convenient time -> after user has already seen some content 
    - Application loads faster especially on mobile devices
        - Mobile devices take longer to parse react and content of application
        - User sees content rendering before this fully completes with SSR
    - Instances of users throwing in the towel because of a slow initial load time are greatly mitigated
        - instant url is clicked content appears as it is actively rendering
        - this preoccupies end user who on average has an exceedingly ephemeral attention span
- Summary 
    - SSR apps trade complexity for performance 
    - Complexity
        - more code, sophisticated libraries, convoluted troubleshooting 
    - Performance 
        - application appears much faster on all devices, especially on slow ones

## How SSR Works
- User accesses application (same as CSR)
    - CSR
        - server sends large packet to client including react, components, html, etc
        - then, client parses scripts and makes a request via AJAX to acquire up to date state of app
        - voila, user runs a fully functional app
        - seamless on powerful devices but can take seconds on slower ones 
    - SSR
        - server loads react, components, and state to memory which skips an AJAX call
        - then components and state are rendered to an HTML string -> output of app
        - this small HTML package sent to client where they immediately see relevant data rendering
        - bottom line -> user sees relevant data faster -> goldfish attention span appeased
            - while user is preoccupied with relevant data rendering on device
            - the client then renders script and loads state with another copy of req via AJAX
            - user runs a fully functional app after being able to see relevant data

## Relevant Tools
- "The mechanic that would perfect his work must first sharpen his tools." - Confucius
- Effective tooling saves time
    - React -> renders JSX to html on the client and on the server
    - Express -> sends server-rendered HTML to the client and more
        - localize a lot of logic in express handlers
        - highly customizable in terms of routes and logic 
    - Babel -> allows JSX code to be loaded into server script 
        - JSX must first be converted into JS via Babel
        - Babel converts JSX into JS used by both the client and the server

## Relevant Features of SSR App to be built
- Delivery of server rendered content 
- Interactiviy via rehydration
- Persistent application state 
    - changes client makes are transmitted to server and retained in memory

---------------------------------------------------------------------------------------------------------------------

## Scaffolding an Environment for SSR
- Fluently use Webpack and Babel to transform JSX code into JS
- Use express to create HTTP server where custom logic can be written 
- Create presentational React components (ie, no internal logic or component state)
    - presentational components can easily be rendered on client or server

## Enter CRApp Considerations
- Create React App 
    - Command line utility that scaffolds react apps
    - Best practices are arrived at by consensus of a diverse and senior cast of devs 
    - Automatically generates express, babel, and webpack configurations
    - Includes command line utilities for updating and maintaining project 
    - Meant for interoperability within and between teams 
- Advantages
    - Little to no understanding of full-stack web development required to use 
    - Constantly revised and updated by experts
    - Industry standard tool
        - Devs are almost always already familiar with it
    - Automatically creates dirs and structure based on best practices
    - Tools used are based on best practices
    - Easily implement prepackaged features such as 
        - Linting
        - SSR
        - etc
- Disadvantages
    - Little to no understanding of full-stack web development required to use
        - Can build an app with it but stagnate insofar as becoming a skilled full-stack dev is concerned
    - Negligible educational value 
    - Very large stack makes troubleshooting problems complicated
    - Intricate structure can only be modified from defaults by expert developers 
    - No choice of tooling 
    - Difficult to implement features not already supported 

## What is Babel?
- Node utility which converts code from one language to another 
    - usually outputs JS
- Uses plugins to add functionality modularly
    - babel-react-plugin, for example 
- So, it supports ECMAScripting in JS environments
    - yet this is typescript so not relevant for the following usecase
    - but if it were a javascript environment, then
        - use
        ```json
        {
            "start": "babel-node server/index.js"
        }
        ```
        - with nodemon, use
        ```json
        {
            "start": "nodemon --exec babel-node server/index.js"
        }
        ```
        - this would support Modern ECMAScripting in Node (import/export) 
## Recap
- Open the new vscode project and open the terminal 
```git
npm init -y
```
- now, install dependencies and dev dependencies (can be achieved in one entry)
```git
npm i compression express path react react-dom react-router-dom && npm i --save-dev @babel/core @babel/node @babel/preset-env @babel/preset-react @types/compression @types/dotenv @types/express @types/node @types/react @types/react-dom @types/react-router-dom @typescript-eslint/eslint-plugin @typescript-eslint/parser awesome-typescript-loader babel-eslint babel-loader babel-preset-react-app css-loader cssnano dotenv file-loader html-webpack-plugin mini-css-extact-plugin nodemon npm-run-all postcss-loader source-map-loader style-loader svg-inline-loader ts-loader ts-node typescript url-loader webpack webpack-bundle-analyzer webpack-cli webpack-dev-server
```
- hit enter, now your package.json will look as follows
```json
    {
	"dependencies": {
		"compression": "^1.7.4",
		"express": "^4.17.1",
		"path": "^0.12.7",
		"react": "^16.13.1",
		"react-dom": "^16.13.1",
		"react-router-dom": "^5.2.0"
	},
	"devDependencies": {
		"@babel/core": "^7.10.2",
		"@babel/node": "^7.10.1",
		"@babel/preset-env": "^7.10.2",
		"@babel/preset-react": "^7.10.1",
		"@types/compression": "^1.7.0",
		"@types/dotenv": "^8.2.0",
		"@types/express": "^4.17.6",
		"@types/node": "^14.0.13",
		"@types/react": "^16.9.37",
		"@types/react-dom": "^16.9.8",
		"@types/react-router-dom": "^5.1.5",
		"@typescript-eslint/eslint-plugin": "^3.3.0",
		"@typescript-eslint/parser": "^3.3.0",
		"awesome-typescript-loader": "^5.2.1",
		"babel-eslint": "^10.1.0",
		"babel-loader": "^8.1.0",
		"babel-preset-react-app": "^9.1.2",
		"css-loader": "^3.6.0",
		"cssnano": "^4.1.10",
		"dotenv": "^8.2.0",
		"file-loader": "^6.0.0",
		"html-webpack-plugin": "^4.3.0",
		"mini-css-extract-plugin": "^0.9.0",
		"nodemon": "^2.0.4",
		"npm-run-all": "^4.1.5",
		"postcss-loader": "^3.0.0",
		"source-map-loader": "^1.0.0",
		"style-loader": "^1.2.1",
		"svg-inline-loader": "^0.8.2",
		"ts-loader": "^7.0.5",
		"ts-node": "^8.10.2",
		"typescript": "^3.9.5",
		"url-loader": "^4.1.0",
		"webpack": "^4.43.0",
		"webpack-bundle-analyzer": "^3.8.0",
		"webpack-cli": "^3.3.11",
		"webpack-dev-server": "^3.11.0"
	}
}

```
- next, create tsconfig in root
```json
{
	"compilerOptions": {
		"target": "ES5",
		"module": "CommonJS",
		"rootDir": "./server",
		"outDir": "./_src",
		"sourceMap": true,
		"esModuleInterop": true,
		"strict": true
	},
	"exclude": ["node_modules", "temp", "_src", "client/**", "public", "dist"]
}
```
- then, create .eslintrc.json in root
```json
{
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": 2020,
		"sourceType": "module"
	},
	"extends": ["plugin:@typescript-eslint/recommended"],
	"env": {
		"node": true,
		"es6": true
	},
	"rules": {
		"indent": "off",
		"@typescript-eslint/indent": "off",
		"@typescript-eslint/explicit-function-return-type": "off"
    }
}
```
- now, create a .env file in the root directory defining the PORT used
```env
PORT=7777
```
- next, create the server directory with an index.ts file
- server/index.ts
```ts
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";

const app = express();

app.get("/", (_req, res) => {
    res.send(
        `<h1>React+TypeScript make for a most excellent dev experience</h1>`
    );
});

app.listen(process.env.PORT);
console.log(`[app]: http://localhost:${process.env.PORT}`);
```
- then, create .babelrc in root to define presets supporting react
```json
{
    "presets": [
        "@babel/preset-env",
        "@babel/preset-react",
        "babel-preset-react-app"
    ]
}
```
- then, add a start script to your package.json as follows
```json
{

	"scripts": {
    "start": "nodemon server/index.ts"
    },

}
```
- start the server
```git
npm run start
```
- you will now see the content of the h1 tags from the server displayed in the browser
    - React+TypeScript make for a most excellent dev experience
        - (a hard truth)

- great, now create a client folder in the root directory
- then create another tsconfig.json file within the client folder as follows
```json
{
	"compilerOptions": {
		"jsx": "react",
		"module": "CommonJS",
		"target": "es6",
		"lib": ["DOM", "DOM.Iterable", "ESNext"],
		"rootDir": "./client",
		"allowJs": true,
		"skipLibCheck": true,
		"removeComments": true,
		"outDir": "./build/",
		"esModuleInterop": true,
		"allowSyntheticDefaultImports": true,
		"strict": true,
		"forceConsistentCasingInFileNames": true,
		"moduleResolution": "node",
		"resolveJsonModule": true,
		"isolatedModules": true
	},
	"include": ["client.tsx"],
	"exclude": ["node_modules"]
}
```
- this tsconfig file is specific for support JSX -> react
    - it also defines the rootDir as ./client -- perfect
- now, create a client.tsx file within the client folder as follows
```tsx
import React from "react";
import { render } from "react-dom";

const App = () => <div>This is a React component ja feel</div>;

render(<App />, document.querySelector("#container"));
```
- great, now create a public folder in the root directory of the app
- within the public folder, create an index.html file as follows
```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta http-equiv="X-UA-Compatible" content="ie-edge" />
		<title>SSR React Components with TypeScript</title>
	</head>
	<body>
		<div id="container">
			React code goes here
        </div>
        <script src="client.js"></script>
	</body>
</html>
```
- the script tag called will make more since momentarily, promise


- next, create webpack.config.js in the root directory
```js
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
```
- the following two properties dictate the entry and output properties of webpack, respectively
```js
module.exports = {
    
    
    
    entry: {
        client: "./client/client.tsx"
    },
    output: {
        filename: "[name].js"
    },

    
    }
```
- now, navigate to package.json and add a build script
```json
{

	"scripts": {
    "start": "nodemon server/index.ts",
    "build": "webpack"
    },

}
```
- the build script will take the contents of the client folder and output them in a dist folder in the root
- but what will the file be titled? recall the following
```js
module.exports = {

    output: {
        filename: "[name].js"
    },

    }
```
- the output filename property is indicating to webpack to mimic the title of the root file in the client folder
    - therefore, the output file is client.js
- now, open the terminal and
```git
npm run build
```
- this builds the client.js file output in the dist folder using the contents of the client/client.tsx file


- recall that mysterious script tag in the public index.html file, bet you know what it does now
```html
<script src="client.js"></script>
```
- this creates a way for the dist/client.js file to be referenced
- ...but how to go about this? 
    - Enter the native file-system module and express
    - navigate to server/index.ts, which will now look as follows
```ts
import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { readFileSync } from "fs";

const app = express();

app.use(express.static("dist"));

app.get("/", (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf-8`);
    res.send(index);
});

app.listen(process.env.PORT);
console.log(`[app]: http://localhost:${process.env.PORT}`);
console.log(`[app]: http://localhost:${process.env.PORT}/client.js`);
```
- readFileSync takes the path to a file as the first argument and the charset specified as the second argument
- but what does the app.use(express.static("dist")); line of code above the express call do?
    - it statically serves the content of files from within the indicated root directory via express
    - now, if you navigate to http://localhost:7777 the content of the App component rendered in client.tsx is displayed
    - there you have it, pretty straightforward after all

- note
    - navigating to http://localhost:7777/client.js serves all the content of the output dist/client.js file in the browser, give it a try

------------------------------------------------------------------------------------------------------------------------------------

## Rendering Comparison -- Client vs Server
- SSR
    - Component sent as pure HTML
        - Needs to be rehydrated to achieve interactivity
    - AJAX reqs are server-to-server (hidden from client)
        - more secure than client-to-server communications (diminished likelihood of XSS or CSRF attacks)
    - Server provides most of the required processing power 
        - cloud computing -> granular control over how much power a server has
- CSR
    - Components fully functional 
        - no rehydration required
    - AJAX reqs are client-to-server
        - viewable by technically adept users -> vulnerabilities
    - Most of the required processing power provided by the client
        - save some processing power from the server
        - however, if client has slow device, this may deter them from using app altogether

## Workflow -- Server Rendering
- (1) load react component and application state into server memory
- (2) Using the state, render component to an HTML string
- (3) Send HTML string to the client

