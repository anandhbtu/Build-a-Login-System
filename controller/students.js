const mongoose = require("mongoose");
const Student = mongoose.model("Student");

//get all student
exports.getAllStudent = async (req, res, next) => {
  const student = await Student.findOne({});
  //console.log('student :>>', res.send(student))
  res.send("Featched following all students !\n"+student);
};

//add student
exports.addStudent = async (req, res) => {
  const student = new Student();
  student.firstName = req.body.firstName;
  student.lastName = req.body.lastName;
  student.user_name = req.body.user_name;
  student.category = req.body.category;
  student.DOB = req.body.DOB;
  student.email = req.body.email;
  student.password = req.body.password;
  student.termAndCondition = req.body.termAndCondition;
  student.mob_no = req.body.mob_no;
  student.date = req.body.date;

  await student.save();

  res.send("Added following student !\n"+student);
};

//gat a student
exports.getAnStudent = async (req, res) => {
  const student = await Student.findOne({ _id: req.params.studentId });
  res.send("Fetched following student !\n"+student);
};

//update an student
exports.updateAnStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(
    {
      _id: req.params.studentId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.send("Updated following student !\n"+student);
};
//delete an student
exports.deleteAnStudent = async (req, res) => {
  const student = await Student.findByIdAndRemove({
    _id: req.params.studentId,
  });
  res.send("Deleted following student !\n"+student);
};
