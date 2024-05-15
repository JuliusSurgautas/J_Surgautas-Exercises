function display(val){

  document.getElementById('resultatas').value += val

  return val

}

function solve(){

  let x = document.getElementById('resultatas').value

  let y = eval(x);

  document.getElementById('resultatas').value = y

  return y

}

function clearScreen(){

  document.getElementById('resultatas').value = ''

}