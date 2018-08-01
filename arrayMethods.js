const objects = require('./objects.json') 


const fraeyah = objects.forEach(function(elem) {
	console.log(elem);
	return;
}); 

const klaus = objects.forEach(function(elem) { 
	console.log(elem);
	return;
}); 

function elijah(elem, index, array) {
	console.log('array_index[' + index + '] = ' + elem); 
	return;
};

function rebekah(elem, index, array) {
	console.log('[array_index[' + index + ']' + elem);
};

console.log(fraeyah); 
console.log(klaus);
objects.forEach(elijah); 
objects.forEach(rebekah);
