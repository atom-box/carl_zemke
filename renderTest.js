// This is a test snippet of
// probe-code.  This EJS renderer worked in 
// code/cold./commenter directory

const http = require("http");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const PORT = 3456;

const app = express();

app.set("views", path.resolve(__dirname, "views"));
app.set("view engine", "ejs");

const entries = [];
app.locals.entries = entries;
app.use(logger("tiny"));
app.use(bodyParser.urlencoded({extended: false}));

app.get("/", (req, res)=>{
	res.render("index"); 
} );