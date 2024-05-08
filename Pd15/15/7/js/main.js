let string = 'hello MY name is JavaScript'; 
let result = replaceLetter(string); function replaceLetter(item) { let letter = item.toUpperCase().split('');
 for (let i = 0; i < letter.length; i++) 
 { if (letter[i] == item[i]) letter[i] = letter[i].toLowerCase();
 } return letter.join(""); }
 
 console.log(string);
 
 console.log(result);