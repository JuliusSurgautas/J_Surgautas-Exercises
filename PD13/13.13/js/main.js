let p1 = window.prompt("1 prekes kaina?");
let p2 = window.prompt("2 prekes kaina?");
let pinigai = window.prompt("kiek pinigu turi?");
let discount = 80; // or 20% (100% - 20% = 80%)

let totalValue = (p1 * discount / 100) + (p2 * discount / 100);

if(pinigai > totalValue){
    console.log("Pinigu uztenka.");
} else{
    console.log("Pinigu neuztenka.");
};

console.log("prekiu bendra kaina: " + totalValue);