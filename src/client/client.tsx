import React from "react";
import { hydrate } from "react-dom";
import { App } from "./App";
import { Question, Answer } from "../lib";

interface FrontProps {
	answers: Answer[];
	questions: Question[];
}

export default function Front({ answers, questions }: FrontProps) {
	hydrate(
		<App questions={questions} answers={answers} />,
		document.querySelector("#container")
	);
}
