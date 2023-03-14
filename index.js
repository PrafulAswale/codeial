const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const expressLayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');
const port = 3000;

app.use(express.urlencoded());
app.use(cookieParser());

app.use(express.static("./assets"));

app.use(expressLayouts);
// extract style and scripts from sun pages into layout
app.set("layout extractStyles", true);
app.set("layout extractStyle", true);

// use express router
app.use('/', require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');


app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server:${err}`);
    }

    console.log(`Server is running on port: ${port}`);
})
