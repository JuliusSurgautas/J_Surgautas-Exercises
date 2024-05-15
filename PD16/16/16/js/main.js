function idealus(number) {

  var temp = 0;

  for (var i = 1; i <= number / 2; i++) {
   
    if (number % i === 0) {
  
      temp += i;
    }
  }

  if (temp === number && temp !== 0) {
 
    console.log("Tai įdealus numeris.");
  } 
  
  else {
    console.log("tai nėra įdealus numeris.");
  }
}

idealus(28); 