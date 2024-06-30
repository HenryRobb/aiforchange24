import user from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";
import { escape } from "querystring";

// Logs a solved question to a user.
export default async function handler(req, res) {
    await connectDB()
    const { course, subject, correct } = req.body;
    const username = localStorage.getItem("username", username);
    const hash_pass = localStorage.getItem("password", hash_pass);

    const Person = mongoose.model('User', user);

    const user = await Person.find().byName(username).exec();
    if (!user.password === hash_pass) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Either the username or password was incorrect." });
    }
    
    if (user.solveQuestion(course, subject, correct)) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Successfully added the question." });
    } else {
        res.status(200).json({ success: false, courseHistory: user.courseHistory, message: "Adding the question failed." });
    }
}