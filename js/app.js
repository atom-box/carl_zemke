/**************************/
/* April 27, 2018 
/* @mistergenest 
/* From memory use js  
/* and Express to render  
/* page views, a la Evan H. Hahn 
/**************************/

const http = require('http');
const logger = require('morgan');
const path = require('path');
const express = require('express');

const app = express();

app.set('views', path.resolve(__dirname, '../views'));
app.set('images', path.resolve(__dirname, '../images'));

app.set('view engine', 'ejs' );
app.use(logger("dev"));
app.get('/troy', (req, res)=>{
	res.render("header", {
		message: "(*&^(*&^*(&^*&^(*&^))))))))))"
	}); 
});

app.get('/rochester', (req, res)=>{
	res.send('If this works, make a view to send.  Then accept a :id arg.');

});
app.get('/ferndale/:hulu', (req, res)=>{
	res.send(`welllllllll... ${req.params.hulu}-${req.params.hulu}-${req.params.hulu}`);

} );

const PORT = 3001;
app.listen(PORT);
console.log(`'m listening on ${PORT}`);

/*dev LOG*/
/*cut bait on the no-run problem*/
/*Sunday and I'm now making a javascript-responsive :id thing*/
/**/
/**/
/**/
