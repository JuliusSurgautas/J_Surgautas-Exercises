
function newFunction() {
    const newPerson = firstPerson;
    return newPerson;
}

const firstPerson = {
    firstName:"Jonas", 
    lastName:"Garsva", 
    age: 30,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};
console.log(firstPerson);

const secondPerson = newFunction();
secondPerson.firstName = "Arturas";
secondPerson.age = 42;
console.log(secondPerson);