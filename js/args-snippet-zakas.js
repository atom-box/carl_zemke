function adder(){
	let i, len, result;
	// interesting.  This is allowed.
	result = 0;
	i = 0;
	len = arguments.length;

	while(i < len){
		result += arguments[i];
		i++;
	}
	return result;
} 
//huh

console.log(adder(2, 6, 33));