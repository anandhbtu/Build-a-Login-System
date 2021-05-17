const mongoose = require("mongoose");
const Admin = mongoose.model("Admin");


//get all admin
exports.getAllAdmin = async (req, res, next) => {
  const admin = await Admin.findOne({});
  res.send("Fetched All Admins !\n"+admin);
};

//add admin
exports.addAdmin = async (req, res) => {
  const admin = new Admin();
  admin.firstName = req.body.firstName;
  admin.lastName = req.body.lastName;
  admin.user_name = req.body.user_name;
  admin.category = req.body.category;
  admin.DOB = req.body.DOB;
  admin.email = req.body.email;
  admin.password = req.body.password;
  admin.termAndCondition = req.body.termAndCondition;
  admin.mob_no = req.body.mob_no;
  admin.date = req.body.date;

  await admin.save();

  res.send("Added following Admin !\n"+admin);
};

//gat a admin
exports.getAnAdmin = async (req, res) => {
  const admin = await Admin.findOne({ _id: req.params.adminId });
  res.send("Fetched following Admin !\n"+admin);
};

//update an admin
exports.updateAnAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndUpdate(
    {
      _id: req.params.adminId,
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );
  res.send("Updated following Admin !\n"+admin);
};
//delete an admin
exports.deleteAnAdmin = async (req, res) => {
  const admin = await Admin.findByIdAndRemove({
    _id: req.params.adminId,
  });
  res.send("Deleted following Admin !\n"+admin);
};
