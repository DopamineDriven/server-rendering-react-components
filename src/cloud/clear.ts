import * as dotenv from "dotenv";
dotenv.config();
import { connectDatabase } from "../database";

const clear = async () => {
    try {
        console.log(`[clear]: initated...`);

        const db = await connectDatabase();

        const answers = await db.answers.find({}).toArray();
        const questions = await db.questions.find({}).toArray();

        if (answers.length > 0) {
            await db.answers.drop();
        }

        if (questions.length > 0) {
            await db.questions.drop();
        }

        console.log(`[clear]: success`);

    } catch {
        throw new Error(`[clear]: failed`)
    }
}

clear();