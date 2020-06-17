import express from "express";
const app = express();

app.get("/", (_req, res) => {
    res.send(
        `<h1>React+TypeScript is a most excellent dev experience</h1>`
    );
})