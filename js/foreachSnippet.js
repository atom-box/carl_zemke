var foods = [];
let thisFood = {
	name: 'carrots',
	mass: 343
}
foods.push(thisFood);

thisFood = {
	name: 'sherbet',
	mass: 200
}
foods.push(thisFood);

foods.forEach(foo => console.log(foo.mass));
