import * as dotenv from "dotenv";
dotenv.config();
import { ObjectId } from "mongodb";
import { connectDatabase } from "../database";
import { Answer, Question } from "../lib/types";

const questions: Question[] = [
    {
        _id: new ObjectId(),
        questionID: "Q1",
        content: "Which backend solution is most appropriate for this application?"
    },
    {
        _id: new ObjectId(),
        questionID: "Q2",
        content: "What percentage of developer time should be devoted to end-to-end testing?"
    }
];

const answers: Answer[] = [
    {
        _id: new ObjectId(),
        answerID: "A1",
        questionID: "Q1",
        upvotes: 2,
        content: "Apache"
    },
    {
        _id: new ObjectId(),
        answerID: "A2",
        questionID: "Q1",
        upvotes: 0,
        content: "Java"
    },
    {
        _id: new ObjectId(),
        answerID: "A3",
        questionID: "Q1",
        upvotes: 4,
        content: "Node"
    },
    {
        _id: new ObjectId(),
        answerID: "A4",
        questionID: "Q1",
        upvotes: 3,
        content: "Python"
    },
    {
        _id: new ObjectId(),
        answerID: "A5",
        questionID: "Q2",
        upvotes: 2,
        content: "25%"
    },
    {
        _id: new ObjectId(),
        answerID: "A6",
        questionID: "Q2",
        upvotes: 1,
        content: "50%"
    },
    {
        _id: new ObjectId(),
        answerID: "A7",
        questionID: "Q2",
        upvotes: 1,
        content: "75%"
    }
];

// sprinkle some try-catch syntactical sugar on this async promise
const seed = async () => {
	try {
		console.log(`[seed]: initiated...`);

		const db = await connectDatabase();

		// loop through array insertOne document into collection at a time
		for (const question of questions) {
			await db.questions.insertOne(question);
		}
		for (const answer of answers) {
			await db.answers.insertOne(answer);
		}
		console.log(`[seed]: success`);
	} catch (error) {
		throw new Error(`[seed]: failed`);
	}
};

seed();