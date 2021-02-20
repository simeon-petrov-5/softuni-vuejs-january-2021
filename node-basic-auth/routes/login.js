var express = require("express");
var router = express.Router();
const users = require("../data/users.json");

router.post("/", function (req, res, next) {
  const expMinutes = 1;
  const { auth } = req;
  const user = users.find((user) => user.username === auth.user);
  user.loggedAt = new Date().getTime();
  user.expiresAt = new Date(user.loggedAt + expMinutes * 60000).getTime();
  res.send({ data: user });
});

module.exports = router;
