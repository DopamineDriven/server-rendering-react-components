import { Collection, ObjectId } from "mongodb";

export interface Question {
    _id: ObjectId;
    questionID: string;
    content: string;
}

export interface Answer {
    _id: ObjectId;
    answerID: string;
    questionID: string;
    upvotes: number;
    content: string;
}

export interface Database {
    answers: Collection<Answer>;
    questions: Collection<Question>;
}