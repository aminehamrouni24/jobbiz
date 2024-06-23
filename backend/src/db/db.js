import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"
const MONGODB_URL = process.env.MONGODB_URL
export const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(MONGODB_URL)
        console.log(`MONGODB Connected !! DB HOST:${MONGODB_URL} `);
    } catch (error) {
        console.log(`MONGODB Connection error`, error);
        process.exit(1)
    }
}