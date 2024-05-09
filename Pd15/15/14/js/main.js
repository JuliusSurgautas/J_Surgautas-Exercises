const a = [1,2,3,4];
const b = [4,5];
const c = a.concat(b)
console.log(c);


function removeDuplicates(c) {
    return c.filter((item,
        index) => c.indexOf(item) === index);
}
console.log(removeDuplicates(c));