const Message = require("../models/messageModel");

exports.sendMessage = async (req, res, next) => {
  try {
    const { message } = req.body;
    const newMessage = await Message.create({
      senderId: req.userId,
      text: message,
    });
    const NewMessage = await Message.findById(newMessage._id).populate(
      "senderId"
    );
    await res
      .status(201)
      .json({ message: "Message sent successfully", NewMessage });
  } catch (err) {
    next(err);
  }
};

exports.allMessages = async (req, res, next) => {
  try {
    const messages = await Message.find().populate("senderId");
    await res.status(200).json({ messages });
  } catch (err) {
    next(err);
  }
};
