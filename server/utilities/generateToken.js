const jwt = require("jsonwebtoken");

function generateToken(userId, secret, expiresIn) {
  return jwt.sign({ userId }, secret, { expiresIn: expiresIn });
}

module.exports = generateToken;
