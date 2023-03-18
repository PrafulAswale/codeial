const express = require("express");
const passport = require("passport");
const router = express.Router();

const users = require("../controllers/users");

router.get("/profile", passport.checkAuthentication, users.profile);

router.get("/sign-up", users.signUp);
router.get("/sign-in", users.signIn);
router.get("/sign-out", users.destroySession);

router.post("/create", users.create);
router.post(
  "/create-session",
  passport.authenticate("local", { failureRedirect: "/user/sign-in" }),
  users.createSession
);

module.exports = router;
