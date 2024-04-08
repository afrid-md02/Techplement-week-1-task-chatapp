const express = require("express");
const router = express.Router();

const {
  sendMessage,
  allMessages,
} = require("../controllers/messagesController");
const isAuth = require("../middleware/auth");

router.post("/send-message", isAuth, sendMessage);

router.get("/all-messages", allMessages);

module.exports = router;
