var prompt = require("prompt-sync")();
var X = +prompt("Entrer l'id d'étudiant que vous recherchez : ");
function rechercherEtudiant(id) {
    let students = [
        { id: 1, name: "Ali", age: 20 },
        { id: 2, name: "Sara", age: 22 },
        { id: 3, name: "Omar", age: 19 },
        { id: 4, name: "Imane", age: 21 }
    ];
    let idStudent = students.find(student => student.id === id);
    if (idStudent) {
        console.log(`
Étudiant trouvé !
ID  : ${idStudent.id}
Nom : ${idStudent.name}
Age : ${idStudent.age}
`);
    } else {
        console.log("Aucun étudiant trouvé avec cet ID.");
    }
}
rechercherEtudiant(X);
