const express = require("express");
const router = express.Router();

const users = require("../controllers/users");

router.get("/profile", users.profile);

router.get("/sign-up", users.signUp);
router.get("/sign-in", users.signIn);

router.post("/create", users.create);

module.exports = router;
