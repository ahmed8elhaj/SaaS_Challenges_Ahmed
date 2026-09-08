var prompt = require('prompt-sync')();
const employees = [
    {
        "name": "Alice Johnson",
        "age": 29,
        "department": "Engineering",
        "salary": 75000
    },
    {
        "name": "Bob Smith",
        "age": 34,
        "department": "Marketing",
        "salary": 68000
    },
    {
        "name": "Carol Williams",
        "age": 41,
        "department": "Finance",
        "salary": 82000
    },
    {
        "name": "David Brown",
        "age": 26,
        "department": "Human Resources",
        "salary": 61000
    }
]
function avgAge() {
    let totalAge = 0;
    let ageMoyen = 0;
    for (i = 0; i < employees.length; i++) {
        totalAge = totalAge + employees[i].age
    }
    ageMoyen = totalAge / (employees.length);
    return ageMoyen
}
function countByDep(depaName) {
    let list = 0;
    for (i = 0; i < employees.length; i++) {
        if (depaName == employees[i].department) {
            list++;
        }
    }
    console.log(list);
}
function findMaxSalary() {
    salaryMax = employees[0].salary
    for (i = 1; i < employees.length; i++) {
        if (salaryMax < employees[i].salary) {
            salaryMax = employees[i].salary
        }
        else {
            salaryMax = salaryMax
        }
    }
    console.log(salaryMax);
    let employName = employees.find(salaryName => salaryName.salary == salaryMax);
    console.log(employName);
}
let ageMoyen = avgAge()
console.log(ageMoyen);
countByDep("Finance")
findMaxSalary()