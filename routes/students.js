const router = require("express").Router();
const mongoose = require("mongoose");

var checkAuth = require("../middleware/auth");

const studentController = require("../controller/students");

router.get("/getAllStudent", checkAuth, studentController.getAllStudent);

router.post("/addStudent", checkAuth, studentController.addStudent);

router.get(
  "/getAnStudent/:studentId",
  checkAuth,
  studentController.getAnStudent
);

router.put(
  "/updateAnStudent/:studentId",
  checkAuth,
  studentController.updateAnStudent
);

router.delete(
  "/deleteAnStudent/:studentId",
  checkAuth,
  studentController.deleteAnStudent
);

module.exports = router;
