module.exports = {
  validateOTP(req, res) {
    const data = req.body.otp;
    if (data.length > 6 || data.length < 6) {
      res
        .status(403)
        .send({ message: "OTP must be of length 6", status: false, code: 403 });
    }
    // if the last digit equals to 7
    if (data.charAt(5) == 7) {
      res.status(500).send({
        message: "OTP includes digit 7 at the end",
        status: false,
        code: 500,
      });
    } else {
      //true response
      res.status(200).send({
        message: " OTP Validated Successfully",
        status: true,
        code: 200,
      });
    }
  },
};
