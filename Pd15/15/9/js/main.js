
var numbers = [1,2,3,4,5,6]
 
var sumResult = numbers.reduce(function(result, num){
  return num+result
}, 0)
 
var multiplicationResult = numbers.reduce(function(result, num){
  return num*result
}, 1)
 
console.log('suma', sumResult)
console.log('gautas skaicius sudauginus', multiplicationResult)