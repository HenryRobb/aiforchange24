import connectDB from "../pages/api/connectDB";
import mongoose from "mongoose";

export default function getContent(req, res) {
  const { user, course, subject } = req.body;

  async function dbInfo(user) {
    try {
      await connectDB(); // Connect to your MongoDB database

      // Fetch user data from MongoDB
      const User = mongoose.model('User', userSchema);
      const userNm = await User.findOne({ name: user }).exec();
    } catch (err) {
      error.log(err);
    }
    return userNm;
  }
  function courseScores(userNm, course, subject) {
    // Extract relevant data from user's course history
    const crsHist = userNm.courseHistory;
    const correct = crsHist[course]?.[subject]?.correct || 0;
    const total = crsHist[course]?.[subject]?.total || 0;
    return { correct, total };
  }

  async function calls(correct, total, subject) {
    // Prepare prompt based on fetched data
    let prompt = `Please make a problem set for our student based on the following criteria\n`;
    prompt += `The return must be an array of problems\n`;
    prompt += `Each problem must have a question, a hint that does not contain the answer, and an answer\n`;
    prompt += `The hardness should be scaled based on how well the student has done in this category previously\n`;
    prompt += `Historically, this student has gotten ${correct} questions correct out of a total of ${total}\n`;
    prompt += `Based on this information, could you make a problem set for this subject, ${subject}, once again considering the student's past performance\n`;


    // Send a POST request to another API endpoint (/api/geminiFlash in this case)
    try {
      const response = await fetch('/api/geminiFlash', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      res.status(200).json({ message: result.response.text });

    } catch (err) {
      console.error(err.message);
      res.status(500).json({ error: err.message });
    }

    const userNm = dbInfo(user);
    let { correct, total } = courseScores(userNm, course, subject);
    calls(correct, total, subject);
  }
}

// if (!userNm) {
//   return res.status(404).json({ error: 'User not found' });
// }