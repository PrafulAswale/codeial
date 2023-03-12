const express = require("express");
const router = express.Router();

const users = require("../controllers/users");

router.get("/profile", users.profile);
router.get("/posts", users.posts);
module.exports = router;
