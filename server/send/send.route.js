const express = require("express");
const router = express.Router();
const sendMail = require("./service/send");

router.post("/api/send", sendMail.send);

module.exports = router;
