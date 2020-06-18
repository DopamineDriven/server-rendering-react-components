import React from "react";
import { questions, answers } from "../lib";

interface Props {
    answers: any;
    questions: any;
}

export const App = ({ answers, questions }: Props) => {
	return (
        <div>This is a React component ja feel</div>
        // {questions.map(({ _id, questionId, content }))}
    );
};
