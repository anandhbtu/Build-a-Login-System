const router = require("express").Router();
const mongoose = require("mongoose");

var checkAuth = require("../middleware/auth");

const teacherController = require("../controller/teachers");

router.get("/getAllTeacher", checkAuth, teacherController.getAllTeacher);

router.post("/addTeacher", checkAuth, teacherController.addTeacher);

router.get("/getAnTeacher/:teacherId", checkAuth, teacherController.getAnTeacher);

router.put("/updateAnTeacher/:teacherId", checkAuth, teacherController.updateAnTeacher);

router.delete(
  "/deleteAnTeacher/:teacherId",
  checkAuth,
  teacherController.deleteAnTeacher
);

module.exports = router;
