import { Answer } from "./types";
import { ObjectId } from "mongodb";


export const answers: Answer[] = [
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