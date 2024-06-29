import user from "userSchema";
import connectDB from "connectDB";

// CREATES A USER WITH username and password
export default async function handler(req, res) {
    await connectDB()

    const { username, password } = req.body;
    const bcrypt = require ('bcrypt');
    bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
            res.status(200).json({ done: false, message: "Password hashing failed." });
        }
        password = hash;
    });
    const person = new user({
        username: username,
        password: password,
        courseHistory: {}
    });
    await person.create((err, result) => {
        if (err) {
            res.status(200).json({ done: false, message: "User was not successfully created. The username likely already exists." });
        }
        else {
            res.status(200).json({ done: true, courseHistory: courseHistory, message: "User was successfully created." });
        }
    });
}