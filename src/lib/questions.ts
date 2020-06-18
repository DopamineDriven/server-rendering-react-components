import { Question } from "./types";
import { ObjectId } from "mongodb";


export const questions: Question[] = [
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