import User from "./userSchema";
import connectDB from "./connectDB";

// LOGS IN A USER WITH username and password
export default async function handler(req, res) {
    await connectDB()
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
                // localStorage.setItem("username", username);
                // localStorage.setItem("password", hash_pass);
                res.status(200).json({ success: true, courseHistory: user.courseHistory, message: "Login was successful." });
            } else {
                // localStorage.setItem("username", username);
                // localStorage.setItem("password", hash_pass);
                res.status(200).json({ success: false, message: "Login failed." });
            }
        });
    });
}