import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import React from "react";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "./client/App";

const app = express();

app.use(express.static("dist"));

app.get("/", async (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf-8`);
    const rendered = renderToString(React.createElement(App));
	res.send(index.replace("{{ rendered }}", rendered));
	// res.send(
	//     `<h1>React+TypeScript make for a most excellent dev experience</h1>`
	// );
});

app.listen(process.env.PORT);
console.log(`[app]: http://localhost:${process.env.PORT}`);
console.log(`[app]: http://localhost:${process.env.PORT}/client.js`);
