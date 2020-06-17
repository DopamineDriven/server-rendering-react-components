import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import { readFileSync } from "fs";

const app = express();

app.use(express.static("dist"));

app.get("/", (_req, res) => {
    const index = readFileSync(`public/index.html`, `utf-8`);
    res.send(index);
    // res.send(
    //     `<h1>React+TypeScript make for a most excellent dev experience</h1>`
    // );
});

app.listen(process.env.PORT);
console.log(`[app]: http://localhost:${process.env.PORT}`);
console.log(`[app]: http://localhost:${process.env.PORT}/client.js`);