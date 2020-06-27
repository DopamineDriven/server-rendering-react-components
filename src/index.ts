import * as dotenv from "dotenv";
dotenv.config();
import express, { Application } from "express";
import React from "react";
import compression from "compression";
import cors from "cors";
import Helmet from "helmet";
import { readFileSync } from "fs";
import ReactDOMServer from "react-dom/server";
import { App } from "./client/App";
import { connectDatabase } from "./database";
import { Question, Answer } from "./lib/types";

const mount = async (app: Application) => {

	const db = await connectDatabase();
	const answers: Answer[] = await db.answers.find({}).toArray();
	const questions: Question[] = await db.questions.find({}).toArray();

	console.log(answers);
	console.log(questions);
	
	app.use(
		compression(),
		express.json({ limit: "2mb" }),
		express.static("dist"),
		cors(),
		Helmet()
	);

	const serverApp = React.createElement(App, null, questions);

	app.get("/", async (_req, res) => {
		const index = readFileSync(`public/index.html`, `utf-8`);
		const rendered = ReactDOMServer.renderToString((serverApp));
		res.send(index.replace("{{ rendered }}", rendered));
		// res.send(
		//     `<h1>React+TypeScript make for a most excellent dev experience</h1>`
		// );
	});

	app.listen(process.env.PORT);
	console.log(`[app]: http://localhost:${process.env.PORT}`);
	console.log(`[app]: http://localhost:${process.env.PORT}/client.js`);
};

mount(express());
