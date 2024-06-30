import user from "./userSchema";
import connectDB from "./connectDB";

// CREATES A USER WITH username and password
export default async function handler(req, res) {
    await connectDB()

    const { username, password } = req.body;
    const bcrypt = require ('bcrypt');
    let hash_pass = password;
    bcrypt.hash(password, 10, function (err, hash) {
        if (err) {
            res.status(200).json({ success: false, message: "Password hashing failed." });
        }
        hash_pass = hash;
    });
    const person = new user({
        username: username,
        password: hash_pass,
        courseHistory: {}
    });
    await person.create((err, result) => {
        if (err) {
            localStorage.setItem("username", username);
            localStorage.setItem("password", hash_pass);
            res.status(200).json({ success: false, message: "User was not successfully created. The username likely already exists." });
        }
        else {
            localStorage.setItem("username", username);
            localStorage.setItem("password", hash_pass);
            res.status(200).json({ success: true, courseHistory: courseHistory, message: "User was successfully created." });
        }
    });
}