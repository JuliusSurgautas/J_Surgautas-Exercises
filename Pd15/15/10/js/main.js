let fruits = ["apple", "banana", "mango", "apple", "Banana"];
const newFruits = [];
for(let i = 0; i < fruits.length; i++){
  newFruits[i] = fruits[i].toLocaleLowerCase();
}
console.log(newFruits);



const uniqueFruits=[];
for(let i=0; i<stringArray.length; i++){
  uniqueFruits.push(i);
 
}

 console.log(uniqueFruits);




 let check_duplicate_in_array = (input_array) => {
	let duplicate_elements = []
	for (num in input_array) {
		for (num2 in input_array) {
			if (num === num2) {
				continue;
			}
			else {
				if (input_array[num] === input_array[num2]) {
					duplicate_elements.push(input_array[num]);
				}
			}
		}
	}
	return [...new Set(duplicate_elements)];
}

console.log(check_duplicate_in_array(uniqueFruits));





// let uniqueFruits = [...new Set(fruits)];
