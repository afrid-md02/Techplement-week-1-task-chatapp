const { validationResult } = require("express-validator");
const bcryptjs = require("bcryptjs");
const User = require("../models/userModel");

const generateToken = require("../utilities/generateToken");

exports.signup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findOne({ email });
    if (user) {
      const error = new Error("User already exists");
      error.statusCode = 403;
      throw error;
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });

    await res
      .status(201)
      .json({ newUser, message: "Your new account has been created" });
  } catch (err) {
    if (
      err.message.includes("duplicate key error collection: chat-app.users")
    ) {
      const error = new Error("Username already in use, choose different one");
      error.statusCode = 403;
      return next(error);
    }
    next(err);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      const error = new Error(errors.array()[0].msg);
      error.statusCode = 400;
      throw error;
    }

    const user = await User.findOne({ email });
    if (!user) {
      const error = new Error("User not registered");
      error.statusCode = 401;
      throw error;
    }

    const check = await bcryptjs.compare(password, user.password);
    if (!check) {
      const error = new Error("Incorrect password");
      error.statusCode = 401;
      throw error;
    }

    const token = generateToken(user._id, process.env.JWT_LOGINSECRET, "12h");

    await res
      .status(200)
      .json({ user, token, message: "Logged in successfully" });
  } catch (err) {
    next(err);
  }
};
