import user from "./userSchema";
import connectDB from "./connectDB";
import mongoose from "mongoose";

// Fetches a user by its username and password and returns its table of courses and categories
export default async function handler(req, res) {
    await connectDB()

    const { username, password } = req.body;
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
    if(user.password === hash_pass) {
        res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "User login was successful!"});
    } else {
        res.status(200).json({ success: false, message: "Either the username or password was incorrect." });
    }
}