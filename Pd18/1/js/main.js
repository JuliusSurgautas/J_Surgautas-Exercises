
const student = {
    firstName: "Julius",
    lastName: "Surgautas",
    age: 18,
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(student.fullName());