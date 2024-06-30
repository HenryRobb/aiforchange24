import User from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Returns the weakest subject within a given course for a user.
export default async function handler(req, res) {
    await connectDB()
    const { username, password, course } = req.body;
    // const username = localStorage.getItem("username");
    // const hash_pass = localStorage.getItem("password");
    const bcrypt = require('bcrypt');
    bcrypt.genSalt(10, (err, salt) => {
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
            res.status(200).json({ success: true, subject: user.findWeakestSubject(course), message: "Success." });
        });
    });
}