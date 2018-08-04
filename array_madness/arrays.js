// arrays can hold arbitray data 

array1 = ['1', 1, [1,2,3], 'abcde', {name: 'loco'} ]

array2 = array1[1] * array1[2][1] 

console.log(array1);

console.log(array2);

console.log(typeof(array1));

function figureThisOut() { 
    array1.filter(function(array) { 
        if( ! array1 !== typeof "object" ) {  
            console.log('you have the wrong type for this operation') 
        }
        else {
            console.log('my understanding is unfruitful') 
        } 
    }); 
} 

figureThisOut(); 
