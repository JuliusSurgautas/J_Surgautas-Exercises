
var myArray = ['a', 1, 'a', 2, '1'];
 
let unique = [...new Set(myArray)];
 
console.log(unique); // unique is ['a', 1, 2, '1']