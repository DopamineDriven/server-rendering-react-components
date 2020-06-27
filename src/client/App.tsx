import React, { FunctionComponent } from "react";

import { Question, Answer } from "../lib/types";

interface Props {
    questions: Question[];
    answers: Answer[];
}

export const App: FunctionComponent<Props> = ({ questions }) => {
	return (
		<section>
			<h1>Q&A Tool</h1>
			{questions.map((question) =>(
                <div key={question.questionID}>
                    <div>
                        {question._id}
                        {question.content}
                    </div>
                </div>
            ))}
		</section>
	);
};
