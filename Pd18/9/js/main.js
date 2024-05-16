const calculator = {
    sudetis: function(a, b) {
      return a + b;
    },
    atimtis: function(a, b) {
      return a - b;
    },
    daugyba: function(a, b) {
      return a * b;
    },
    dalyba: function(a, b) {
      if (b === 0) {
        return "Error";
      }
      return a / b;
    },
    saknis: function(a) {
      return Math.sqrt(a);
    },
  };

  console.log(calculator.sudetis(5, 3));
  console.log(calculator.atimtis(10, 4)); 
  console.log(calculator.daugyba(2, 6));
  console.log(calculator.dalyba(8, 2));
  console.log(calculator.saknis(25)); 