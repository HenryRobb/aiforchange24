import User from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Logs a solved question to a user.
export default async function handler(req, res) {
    await connectDB()
    const { username, password, course, subject, correct } = req.body;
    // const username = localStorage.getItem("username", username);
    // const hash_pass = localStorage.getItem("password", hash_pass);
    const bcrypt = require('bcrypt');
    await bcrypt.genSalt(10, (err, salt) => {
        if (err) {
            res.status(200).json({ success: false, message: "Password hashing failed." });
            return;
        }
        bcrypt.hash(password, salt, function (err, hash) {
            if (err) {
                res.status(200).json({ success: false, message: "Password hashing failed." });
                return;
            }
            const user = User.find().byName(username);
            if (!user.password === hash) {
                res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Either the username or password was incorrect." });
            }

            if (user.solveQuestion(course, subject, correct)) {
                res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Successfully added the question." });
            } else {
                res.status(200).json({ success: false, courseHistory: user.courseHistory, message: "Adding the question failed." });
            }
        });
    });
}