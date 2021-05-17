const mongoose = require("mongoose");
const Teacher = mongoose.model("Teacher");
//get all teacher
exports.getAllTeacher = async (req, res, next) => {
  const teacher = await Teacher.findOne({});
  //console.log('teacher :>>', res.send(teacher))
  res.send("Featched all teacher !\n"+teacher);
};

//add teacher
exports.addTeacher = async (req, res) => {
  const teacher = new Teacher();
  teacher.firstName = req.body.firstName;
  teacher.lastName = req.body.lastName;
  teacher.user_name = req.body.user_name;
  teacher.category = req.body.category;
  teacher.DOB = req.body.DOB;
  teacher.email = req.body.email;
  teacher.password = req.body.password;
  teacher.termAndCondition = req.body.termAndCondition;
  teacher.mob_no = req.body.mob_no;
  teacher.date = req.body.date;

  await teacher.save();

  res.send("Added following teacher !\n"+teacher);
};

//gat a teacher
exports.getAnTeacher = async (req, res) => {
  const teacher = await Teacher.findOne({ _id: req.params.teacherId });
  res.send("Featched following teacher !\n"+teacher);
};

//update an teacher
exports.updateAnTeacher = async (req, res) => {
  const teacher = await Teacher.findByIdAndUpdate(
    {
      _id: req.params.teacherId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.send("Updated following teacher !\n"+teacher);
};
//delete an teacher
exports.deleteAnTeacher = async (req, res) => {
  const teacher = await Teacher.findByIdAndRemove({
    _id: req.params.teacherId,
  });
  res.send("Deleted following teacher !\n"+teacher);
};
