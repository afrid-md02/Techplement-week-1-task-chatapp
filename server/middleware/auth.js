const User = require("../models/userModel");
const verifyToken = require("../utilities/verifyToken");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    //verifying token
    const decoded = verifyToken(token, process.env.JWT_LOGINSECRET);
    if (!decoded) {
      throw new Error("Session expired, login to send message");
    }
    //finding user in db
    req.userId = decoded.userId;
    const user = await User.findById(req.userId);
    if (!user) {
      throw new Error("User not found");
    } else {
      next();
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
