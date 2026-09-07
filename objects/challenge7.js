let students = [
    { name: "Ali", note: 15 },
    { name: "Sara", note: 8 },
    { name: "Omar", note: 17 },
    { name: "Imane", note: 11 },
    { name: "Yassine", note: 6 }
];
let admis = 0;
let nonAdmis = 0;
for (i = 0; i < students.length; i++) {
    if (students[i].note >= 10) {
        console.log(`${students[i].name} sont note ${students[i].note} est : Admit.`);
        admis++;

    }
    else {
        console.log(`${students[i].name} sont note ${students[i].note} est : Non admis.`);
        nonAdmis++;
    }

} 
console.log(`les admis est ${admis} étudiants.`);
console.log(`les non admis est ${nonAdmis} étudiants.`);