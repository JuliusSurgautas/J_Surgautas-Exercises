

const minSalary = 1000;

const employees = [
    { name: 'Julius', surname: 'Surgautas', salary: 2500 },
    { name: 'Aleksas', surname: 'Saulenas', salary: 2000 },
    { name: 'Justina', surname: 'Januleiviciute', salary: 1500 },
    { name: 'Edgaras', surname: 'Valancevicius', salary: 1000 }
];

function filterEmployees(employees, minSalary) {
    return employees.filter(employee => employee.salary > minSalary);
}

const filteredEmployees = filterEmployees(employees, minSalary);
console.log(filteredEmployees);