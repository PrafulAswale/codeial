const express = require("express");
const router = express.Router();
const passport = require("passport");

const posts = require("../controllers/posts");

router.post("/create", passport.checkAuthentication, posts.create);

module.exports = router;
