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

app.set('views', path.resolve(__dirname, "views" )  );
app.set('view engine', 'ejs' );

app.get('/troy', (req, res)=>{
	console.log("I");
	res.send("Homer wuz 'ere.");
	return; // surprise: w/o this, runs 20, 21
	console.log("II");
	res.render("header", {
		message: "Shibolleth."
	})
}
);

app.get('/rochester', (req, res)=>{
	res.send("If this works, make a view to send.  Then accept a :id arg.");

});
const PORT = 3001;
app.listen(PORT);
console.log(`'m listening on ${PORT}`);
