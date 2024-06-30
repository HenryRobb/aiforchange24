import user from "./userSchema";
import connectDB from "./connectDB";

// LOGS IN A USER WITH username and password
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

    const Person = mongoose.model('User', user);
    const user = await Person.find().byName(username).exec();
    if(user.password === hash_pass) {
        localStorage.setItem("username", username);
        localStorage.setItem("password", hash_pass);
        res.status(200).json({success: true, courseHistory: user.courseHistory, message: "Login was successful."});
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("password", hash_pass);
        res.status(200).json({success: false, message: "Login failed."});
    }
}