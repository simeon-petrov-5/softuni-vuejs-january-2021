var express = require("express");
var router = express.Router();
const users = require("../data/users.json");

const delay = (ms) => new Promise((res) => setTimeout(res, ms));
/* GET users listing. */
router.get("/", function (req, res, next) {
  delay(2000).then(() => {
    res.send({ data: users });
  });
});

module.exports = router;
