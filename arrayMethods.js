const array1 = ['i', 'am', 'an', 'array'] 

const arrayobj = [{ givenNames: 'Mr. Veggie Burger', surName: 'burger', status: 'single', age: 19, occupation: 'aggravating people'},
							{ givenNames: 'Mr. Pineapple Burger', surName: 'pineapple', status: 'married', age: 27, occupation: 'lifting up people'}]

const arrayobj2 = [{ givenNames: 'Ms. Chocolate Cake', surName: 'cake', status: 'single', age: 22, occupation: 'twerking'},
							{ givenNames: 'Ms. Fascinating Flower', surName: 'flower', status: 'married', age: 37, occupation: 'painting'}]

const fraeyah = array1.forEach(function(elem) {
	console.log(elem);
	return;
}); 

const klaus = arrayobj.forEach(function(elem) { 
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
array1.forEach(elijah); 
arrayobj2.forEach(rebekah);
