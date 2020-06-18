import React from "react";
import { hydrate } from "react-dom";
import { App }  from "./App";
import { questions } from "../lib";

hydrate(<App questions={questions} />, document.querySelector("#container"));
