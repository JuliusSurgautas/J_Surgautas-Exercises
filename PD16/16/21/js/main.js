
function greeting(name, callback) {
  console.log("Sveiki, " + name + "!");
  callback();
}

function farewell() {
  console.log("Visogero!");
}

greeting("Julius", farewell);
