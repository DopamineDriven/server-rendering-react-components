import React from "react";

import { Question, Answer } from "../lib/types";

interface Props {
    questions: Question[];
    answers: Answer[];
}

export const App = ({ questions, answers }: Props) => {
	return (
		<div>
			<h1>Q&A Tool</h1>
			{questions.map(({_id, questionID, content}) =>(
                <div key={questionID}>
                    <h3>
                        {_id}
                        {content}
                    </h3>
                </div>
            ))}
		</div>
	);
};
