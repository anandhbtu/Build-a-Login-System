const mongoose = require("mongoose");
const Registration = mongoose.model("registration");
const bcrypt = require("bcrypt");

exports.Registration = async (req, res, next) => {
  console.log(req.userData);
  var {
    firstName,
    lastName,
    user_name,
    category,
    DOB,
    email,
    password,
    cofirmPassword,
    termAndCondition,
    mob_no,
    date,
  } = req.body;

  if (
    !firstName ||
    !lastName ||
    !user_name ||
    !category ||
    !DOB ||
    !email ||
    !password ||
    !cofirmPassword ||
    !termAndCondition||
    !mob_no
  ) {
    res.send({ message: "please fill all the require field!" });
  }

  if (
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
      String(email).toLowerCase()
    ) != true
  ) {
    res.send({ message: "Please enter valid email!" });
    return;
  }

  if (password != cofirmPassword) {
    res.send({ message: "Password should be same!" });
  }

  if (password.length < 6) {
    errors.push({ msg: "password atleast 6 characters" });
  }

  if (typeof message == "undefined") {
    await Registration.findOne({ email: email }, function (err, data) {
      var err;

      if (err) throw err;
      if (data) {
        console.log("User Exists");
        err = "User Already Exists with this Email...";

        res.send({ message: err });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;
          bcrypt.hash(password, salt, (err, hash) => {
            if (hash) {
              if (err) throw err;

              const registration = new Registration();
              registration.firstName = req.body.firstName;
              registration.lastName = req.body.lastName;
              registration.user_name = req.body.user_name;
              registration.category = req.body.category;
              registration.DOB = req.body.DOB;
              registration.email = req.body.email;
              registration.password = hash;
              registration.termAndCondition = req.body.termAndCondition;
              registration.mob_no = req.body.mob_no;
              registration.date = req.body.date;
              registration.save();
              res.send("Registration Succesfull !\n"+registration);
            }
          });
        });
      }
    });
  } else {
    res.end();
  }
};
