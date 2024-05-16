

const zmogus = {
    Vardas: "Julius",
    amzius: 18,
    lytis: "Male",
    miestas: "Vilnius"
};

function printPersonProperties( zmogus) {
    for (let property in zmogus) {
        if (zmogus.hasOwnProperty(property)) {
            console.log(property + ": " + zmogus[property]);
        }
    }
}

printPersonProperties(zmogus);