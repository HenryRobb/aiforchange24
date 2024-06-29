import user from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Logs a solved question to a user.
export default async function handler(req, res) {
    await connectDB()

    const { username, password, course, subject, correct } = req.body;
    const bcrypt = require ('bcrypt');
    let hash_pass = password;
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.status(200).json({ done: false, message: "Password hashing failed." });
        }
        hash_pass = hash;
    });
    const Person = mongoose.model('User', yourSchema);

    const user = await Person.find().byName(username).exec();
    if(!user.password === hash_pass) {
        res.status(200).json({ success: false, message: "Either the username or password was incorrect." });
    }
    if(user.solveQuestion(course,subject,correct)) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory,  message: "Successfully added the question." });
    } else {
        res.status(200).json({ success: false, courseHistory: user.courseHistory,  message: "Adding the question failed." });
    }
}