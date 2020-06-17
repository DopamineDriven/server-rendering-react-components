import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();

app.get("/", (_req, res) => {
    res.send(
        `<h1>React+TypeScript make for a most excellent dev experience</h1>`
    );
})

app.listen(process.env.PORT);
console.log(`[app]: http://localhost:${process.env.PORT}`);