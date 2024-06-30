import user from "./userSchema";
import connectDB from "./connectDB";

// LOGS A USER OUT
export default async function handler(req, res) {
    localStorage.setItem("username", "");
    localStorage.setItem("password", "");
    res.status(200).json({success: true,  message: "Logout was successful."});
}