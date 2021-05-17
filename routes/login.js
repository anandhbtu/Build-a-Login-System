const express = require("express");
const router = require("express").Router();



const loginController = require("../controller/login");

router.post("/login", loginController.Login);
module.exports = router;
