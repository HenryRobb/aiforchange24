import user from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Returns the weakest subject within a given course for a user.
export default async function handler(req, res) {
    await connectDB()
    const { course } = req.body;
    const username = localStorage.getItem("username", username);
    const hash_pass = localStorage.getItem("password", hash_pass);

    const Person = mongoose.model('User', user);

    const user = await Person.find().byName(username).exec();
    if (!user.password === hash_pass) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Either the username or password was incorrect." });
    }
    res.status(200).json({ success: true, subject: user.findWeakestSubject(course), message: "Success." });

}