import mongoose from 'mongoose';
const { Schema } = mongoose;

const User = new Schema({
  username : {
    type: String,
    required: true,
    unique: true
  },
  password : {
    type: String,
    required: true,
  },
  // problemHistory maps a string type of problem (e.g. "Multiplication") to a count representing # Wrong - # Right.
  courseHistory: {
    type: Map,
    of: new Schema({
      type: Map,
      of: Number
    })
  },
  // problemHistory maps a string type of problem (e.g. "Multiplication") to a count representing # Wrong - # Right.
  query: {
    // Query searches for a user by their username
    byName(name) {
      return this.where({ username: name });
    }
  },
  methods: {
    // Method finds the weakest subject by means of the subject with the greatest count in the problemHistory map
    findWeakestSubject(course) {
      let worstSubject : String;
      let worstNum : Number = Number.MAX_VALUE;
      this.courseHistory[course].forEach((value: Number, key: String) => {
        if(value < worstNum) {
          worstNum = value;
          worstSubject = key;
        }
      });
      return worstSubject;
    },
    solveProblem(course, subject, correct) {
      if(correct) {
        if(this.courseHistory[course][subject]) {
          this.courseHistory[course][subject] = 1;
        } else {
          this.courseHistory[course][subject] += 1;
        }
      } else {
        if(this.courseHistory[course][subject]) {
          this.courseHistory[course][subject] = -1;
        } else {
          this.courseHistory[course][subject] -= 1;
        }
      }
      this.save((err, result) => {
        return !err;
      });
    }
  }
});

export default mongoose.models.User || mongoose.model("User", User);
