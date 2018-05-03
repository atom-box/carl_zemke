// Hope I don't strand this.  It's on the branch!  
// May 3, 2018
// Practice THIS syntax, 
// Zakas page 25, 
// Passing in a function as an argument
// TO ANOTHER FUNCTION.  

function sayNameForAll(){
	console.log(this.name); 
}

gal1 = {
	name: 'Veronique',
	sayName: sayNameForAll
}

gal2 = {
	name: 'Nathalie',
	sayName: sayNameForAll
}

gal1.sayName();
gal2.sayName();
sayNameForAll();