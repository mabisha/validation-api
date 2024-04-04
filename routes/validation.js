const express = require("express");
const userController = require("../controllers/validation");
const router = express.Router();

router.route("/api/validate_otp").post(userController.validateOTP);

module.exports = router;
