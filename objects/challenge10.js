var prompt = require('prompt-sync')();
let choix;
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
do
{console.log(`
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
 choix = +prompt("Votre choix :");

switch (choix) {
    case 1:
        afficherEtudiant(students)
        break;
    case 2:
        let id = prompt("Entrer l'id  :");
        rechercherEtudiant(id)
        break;
    case 3:
        let city = prompt("Entrer la ville :");
        findCity(city)
        break;
    case 4:
        noteAdmis()
        break;
    case 5:
        noteNotAdmis()
        break;
    case 6:
        noteMax()
        break;
    case 7:
        calculeNoteMoyenne()
        break;
    default:
        console.log('Mercie pour votre viste. ');

        break;


}}while (choix !== 8);
function afficherEtudiant(student) {
    console.table(student);
}
function rechercherEtudiant(studentToFind) {
    let studentFound = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].id == studentToFind) {
            console.log(students[i]);
            studentFound = true;
        }
    }
    if (!studentFound) {
        console.log('not found');
    }
}
function findCity(cityToFind) {
    let cityFound = false;
    for (let i = 0; i < students.length; i++) {
        if (students[i].city == cityToFind) {
            console.log(students[i]);
            cityFound = true;
        }
    }
    if (!cityFound) {
        console.log('not found');
    }

}
function noteAdmis() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].note >= 10) {
            console.log(students[i]);
        }
    }
}
function noteNotAdmis() {
    for (let i = 0; i < students.length; i++) {
        if (students[i].note <= 10) {
            console.log(students[i]);
        }
    }
}
function noteMax() {
    let noteMax = students[0].note;
    for (let i = 1; i < students.length; i++) {
        if (noteMax < students[i].note) {
            noteMax = students[i].note
        }
    }
    let studentMaxNote = students.find(maxNote => maxNote.note == noteMax)
    console.log(studentMaxNote);
}
function calculeNoteMoyenne() {
    let noteTotal = 0;
    let notAvrg
    for (let i = 0; i < students.length; i++) {
        noteTotal = noteTotal + students[i].note
    }
    notAvrg = noteTotal / (students.length);
    console.log(`la moyenne de la classe : ${notAvrg}`);
}
