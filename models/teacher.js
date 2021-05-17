const mongoose = require("mongoose");

const TeacherSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
        type: String,
        required: true,
      },
    user_name: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    category: {
        type: String,
        required: true,
      },
      DOB: {
        type: String,
        required: true,
      },
    email: {
      type: String,
      required: true,
      index: {
        unique: true,
      },
    },
    password: {
      type: String,
      required: true,
    },
    termAndCondition: {
        type: Boolean,
        required: true,
      },
    mob_no: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    //note: isko schema k bahar likhenge
  }
);
const Teacher = mongoose.model("Teacher", TeacherSchema);

module.exports = Teacher;
