import React from "react";
import { hydrate } from "react-dom";
import App from "./App";
import { questions, answers } from "../lib";


hydrate(<App questions={questions} answers={answers} />, document.querySelector("#container"));
