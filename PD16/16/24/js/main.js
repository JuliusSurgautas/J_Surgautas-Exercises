var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var result = document.querySelector(".result");
var statement = document.querySelector(".result-statement");
var BMI, height, weight;

calculateButton.addEventListener("click", ()=>{

    height = heightInput.value;
    weight = weightInput.value;
    BMI = weight/(height**2); 
    result.innerText = BMI;

    if(BMI < 18.5){
        statement.innerText = "Jūsų KMI patenka į per mažo svorio diapazoną";    
    }else if((BMI > 18.5) && (BMI < 24.9)){
        statement.innerText = "Jūsų KMI patenka į normalų arba sveiką svorio diapazoną";
    }else if((BMI > 25) && (BMI < 29.9 )){
        statement.innerText = "Jūsų KMI patenka į antsvorio diapazoną";
    }else{
        statement.innerText = "Jūsų KMI patenka į nutukimo diapazoną";
    }
});