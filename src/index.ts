import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import React from "react";
import { readFileSync } from "fs";
import { renderToString } from "react-dom/server";
import { App } from "./client/App";
import { connectDatabase } from "./database";

const app = express();

app.use(express.static("dist"));

const mount = async () => {
	const db = await connectDatabase();

	const answers = await db.answers.find({}).toArray();
	const questions = await db.questions.find({}).toArray();

	console.log(answers);
	console.log(questions);
}
mount();

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
