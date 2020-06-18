import React from "react";

import { Question, Answer } from "../lib/types";

// interface Props {
// 	questions: Question[];
// 	answers: Answer[];
// }

interface Props {
    questions: Question[];
}

export const App = ({ questions }: Props) => {
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
            <h1>

            </h1>
		</div>
		// {questions.map(({ _id, questionId, content }))}
	);
};
