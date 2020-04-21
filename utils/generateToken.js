const jwt = require("jsonwebtoken");

module.exports = (user) => {
  const payload = {
    userId: user.id,
    username: user.username,
  };

  const secret = process.env.JWT_SECRET || "secreto";

  const options = {
    expiresIn: "1h",
  };

  return jwt.sign(payload, secret, options);
};
