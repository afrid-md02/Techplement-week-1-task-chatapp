const express = require("express");
const { body } = require("express-validator");

const { signup, login } = require("../controllers/authController");

const router = express.Router();

router.post(
  "/signup",
  [
    body("userName", "User name must be min:4 in length")
      .trim()
      .isLength({ min: 4 }),
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be min:6 characters in length")
      .trim()
      .isLength({ min: 6 }),
    body("confirmPassword", "Passwords must match")
      .trim()
      .custom((value, { req }) => {
        if (value !== req.body.password) {
          throw new Error("Passwords must match");
        }
        return true;
      }),
  ],
  signup
);

router.post(
  "/login",
  [
    body("email", "Please enter a valid email").isEmail(),
    body("password", "Password must be min:6 characters in length")
      .trim()
      .isLength({ min: 6 }),
  ],
  login
);

module.exports = router;
