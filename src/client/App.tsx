import React, { FC } from "react";
import { Question, Answer } from "../lib";

interface Props {
	questions: Question[];
	answers: Answer[];
}

const App: FC<Props> = ({ answers, questions }) => {
    
	return (
		<>
			{questions.map((currentQuestion) => {
				const inSection = answers.filter(
					(answer) => answer.question === currentQuestion
				)

				return (
                <section
                    key={}         
                    content={currentQuestion}
                    answers={inSection}                    
                />;)
			})}
		</>
	);
};

export default App;