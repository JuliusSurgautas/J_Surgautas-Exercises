
function findUnique(str) {
  let uniq = "";

  for (let i = 0; i < str.length; i++) {
      
      if (uniq.includes(str[i]) === false) {
          
          uniq += str[i]
      }
  }
  return uniq;
}

console.log(findUnique("Kvailys"))
console.log(findUnique("Kvailys, pripažinęs esąs kvailys, jau nėra kvailys."))