let students = [
    {
        firstName: "Ali",
        age: 20,
        city: "Youssoufia"
    },
    {
        firstName: "Sara",
        age: 22,
        city: "Marrakech"
    },
    {
        firstName: "Omar",
        age: 19,
        city: "Safi"
    }
];
console.log(students[0], students[1], students[2]);
console.log(students[0].firstName, students[1].firstName, students[2].firstName);
console.log(students[0].age, students[1].age, students[2].age);
console.log(`${students[0].firstName} a ${students[0].age} ans et habite à ${students[0].city}.`);
console.log(`${students[1].firstName} a ${students[1].age} ans et habite à ${students[1].city}.`);
console.log(`${students[2].firstName} a ${students[2].age} ans et habite à ${students[2].city}.`);
