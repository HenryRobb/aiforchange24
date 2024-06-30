import User from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Fetches a user by its username and password and returns its table of courses and categories
export default async function handler(req, res) {
    await connectDB()
    // const username = localStorage.getItem("username");
    // const hash_pass = localStorage.getItem("password");
    const { username, password } = req.body;
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
            if (user.password === hash) {
                res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Fetch was successful!" });
            } else {
                res.status(200).json({ success: false, message: "Either the username or password was incorrect." });
            }

        });
    });
}