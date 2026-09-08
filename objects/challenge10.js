var prompt = require('prompt-sync')();
console.log(`
=============================
     STUDENT MANAGER
=============================`);

console.log("1. Afficher tous les étudiants");
console.log("2. Rechercher un étudiant");
console.log("3. Rechercher par ville");
console.log("4. Afficher les étudiants admis");
console.log("5. Afficher les étudiants non admis");
console.log("6. Afficher le meilleur étudiant");
console.log("7. Afficher la moyenne de la classe");
console.log("8. Quitter");
var choix = +prompt("Votre choix :");
let students = [
    {
        id: 1,
        name: "Ali",
        age: 21,
        city: "Youssoufia",
        note: 15
    },
    {
        id: 2,
        name: "Sara",
        age: 22,
        city: "Marrakech",
        note: 17
    },
    {
        id: 3,
        name: "Omar",
        age: 20,
        city: "Safi",
        note: 8
    },
    {
        id: 4,
        name: "Imane",
        age: 23,
        city: "Youssoufia",
        note: 12
    },
    {
        id: 5,
        name: "Yassine",
        age: 19,
        city: "Safi",
        note: 9
    }
];
switch (choix) {
    case 1:
        console.log(students);
        break;
    case 2:
        let studentToFind = prompt("Entrer le nom :");
        let studentFound = false;
        for (i = 0; i < students.length; i++) {
            if (students[i].name == studentToFind) {
                console.log(students[i]);
                studentFound = true;
            }
        }
        if (!studentFound) {
            console.log('not found');
        }
        break;
    case 3:
        let cityToFind = prompt("Entrer la ville :");
        let cityFound = false;
        for (i = 0; i < students.length; i++) {
            if (students[i].city == cityToFind) {
                console.log(students[i]);
                cityFound = true;
            }
        }
        if (!cityFound) {
            console.log('not found');
        }
        break;
    case 4:
        for (i = 0; i < students.length; i++) {
            if (students[i].note >= 10) {
                console.log(students[i]);
            }
        }
        break;
    case 5:
        for (i = 0; i < students.length; i++) {
            if (students[i].note <= 10) {
                console.log(students[i]);
            }
        }
        break;
    case 6:
        let noteMax = students[0].note;
        for (i = 1; i < students.length; i++) {
            if (noteMax < students[i].note) {
                noteMax = students[i].note
            }
        }
        let studentMaxNote = students.find(maxNote => maxNote.note == noteMax)
        console.log(studentMaxNote);
        break;
    case 7:
        let noteTotal = 0;
        let notAvrg
        for (i = 0; i < students.length; i++) {
            noteTotal = noteTotal + students[i].note
        }
        notAvrg = noteTotal / (students.length);
        console.log(`la moyenne de la classe : ${notAvrg}`);
        break;
    default:
        console.log('Mercie pour votre viste. ');

        break;


}