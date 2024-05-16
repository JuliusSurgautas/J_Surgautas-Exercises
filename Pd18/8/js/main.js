function pirmFunction() {
    let count = 0;
    for (let x in firstPerson) {
        if (firstPerson[x] == secondPerson[x]) {
            count++;
        }
    }
    if (count == 3) {
        console.log("vienodi")
    } else {
        console.log("nevienodi")
    }
}

const firstPerson = {
    firstName:"Jonas", 
    lastName:"Garsva", 
    age: 30,
};

const secondPerson = {
    firstName:"Petras", 
    lastName:"Petrenas", 
    age: 45,
};

pirmFunction();