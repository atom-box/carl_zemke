// PRINTS 51,000 lines according to wordcount
// should add a random cloud generator
// May 5, 2018 Day after Meg 10 year!
// Written in 16 minutes, made me feel better.
let clouds = [
	 {
		name: 'cirrus',
		altitude: 15000
	},
	{
		name: 'cumulus',
		altitude: 4000

	},
	{
		name: 'alto-cumulus',
		altitude: 32000

	}
];

clouds.forEach(foo => {
	let i =0;
	for ( ; i < foo.altitude; i++ ){
		console.log(foo.name);
	}

} );
