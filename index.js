const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;
const expressLayouts = require("express-ejs-layouts");
const db = require("./config/mongoose");
//used for session cookie
const session = require("express-session");
const passport = require("passport");
const passportLocal = require("./config/passport-local-strategy");
const MongoStore = require("connect-mongo");
const sassMiddleware = require("node-sass-middleware");

app.use(
  sassMiddleware({
    src: "./assets/scss",
    dest: "./assets/css",
    debug: true,
    outputStyle: "expanded",
    prefix: "/css",
  })
);
app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
// extract style and scripts from sun pages into layout
app.set("layout extractStyles", true);
app.set("layout extractStyle", true);

//set up the view engine
app.set("view engine", "ejs");
app.set("views", "./views");

app.use(
  session({
    name: "codeial",
    //Todo change the secret before deployment in production mode
    secret: "something",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({
      mongoUrl: "mongodb://localhost/codeial_development",
      autoRemove: "disabled",
    }),
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);
// use express router
app.use("/", require("./routes"));

app.listen(port, function (err) {
  if (err) {
    console.log(`Error in running the server:${err}`);
  }

  console.log(`Server is running on port: ${port}`);
});
