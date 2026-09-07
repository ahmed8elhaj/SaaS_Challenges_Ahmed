let employee = {
    firstName: "Sara",
    lastName: "Amrani",
    salary: 7000,
    bonus: 1000,
    absenceDays: 2
};
let penalites = employee.salary / 30 * employee.absenceDays
let salaireFinal = employee.salary + employee.bonus - penalites
console.log(`
    Votre salary    : ${employee.salary} DH 
    Votre bonus     : ${employee.bonus} DH 
    Votre pénalités : ${penalites} DH 
    Votre Salaire final : ${salaireFinal} DH`);
