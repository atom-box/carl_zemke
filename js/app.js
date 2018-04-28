/**************************/
/* April 27, 2018 
/* @mistergenest 
/* From memory use js  
/* and Express to render  
/* page views, a la Evan H. Hahn 
/**************************/

const express = require('express');
const path = require("path");
const app = express();

app.set("views", path.resolve(__dirname, "views" )  );
app.set("view engine", "ejs" );