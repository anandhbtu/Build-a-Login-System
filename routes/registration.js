const express = require("express");
const router = require("express").Router();

const registrationController = require("../controller/registration");

router.post("/registration", registrationController.Registration);
module.exports = router;
