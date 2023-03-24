const express = require("express");
const router = express.Router();

const posts = require("../controllers/posts");

router.post("/create", posts.create);

module.exports = router;
