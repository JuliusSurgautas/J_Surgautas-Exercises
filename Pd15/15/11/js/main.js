let fruits = ["apple", "banana", "mango", "apple", "Banana"];
const newFruits = [];
for(let i = 0; i < fruits.length; i++){
  newFruits[i] = fruits[i].toLocaleLowerCase();
}
console.log(newFruits);



function removeDuplicates(newFruits) {
    return newFruits.filter((item,
        index) => newFruits.indexOf(item) === index);
}
console.log(removeDuplicates(newFruits));

// praleista