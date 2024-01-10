const express = require("express");
const router = express.Router();
const mailService = require("./service/mail");

router.get("/api/mails", mailService.mailService);
router.get("/api/mails/recieved", mailService.recieved);

module.exports = router;
