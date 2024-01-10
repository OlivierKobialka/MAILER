const express = require("express");
const router = express.Router();
const readUnread = require("./service/read_unread");

router.post("/api/mark/read", readUnread.read);
router.post("/api/mark/unread", readUnread.unread);

module.exports = router;
