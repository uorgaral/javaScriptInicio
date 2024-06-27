const prompt = require("prompt-sync")();
const nota1 = Number(prompt("Nota de matemática: "));
const nota2 = Number(prompt("Nota de LP: "));
const nota3 = Number(prompt("Nota de inglês: "));
let notaFinal = (nota1 + nota2 + nota3) / 3;

console.log(notaFinal);
