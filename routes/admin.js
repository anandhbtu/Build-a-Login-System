const router = require("express").Router();

var checkAuth = require("../middleware/auth");

const adminController = require("../controller/admin");

router.get("/getAllAdmin", checkAuth, adminController.getAllAdmin);

router.post("/addAdmin", checkAuth, adminController.addAdmin);

router.get("/getAnAdmin/:adminId", checkAuth, adminController.getAnAdmin);

router.put("/updateAnAdmin/:adminId", checkAuth, adminController.updateAnAdmin);

router.delete("/deleteAnAdmin/:adminId", checkAuth, adminController.deleteAnAdmin);

module.exports = router;
