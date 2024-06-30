import user from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Fetches a user by its username and password and returns its table of courses and categories
export default async function handler(req, res) {
    await connectDB()
    const username = localStorage.getItem("username", username);
    const hash_pass = localStorage.getItem("password", hash_pass);

    const Person = mongoose.model('User', user);

    const user = await Person.find().byName(username).exec();
    if (user.password === hash_pass) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Fetch was successful!" });
    } else {
        res.status(200).json({ success: false, message: "Either the username or password was incorrect." });
    }

}