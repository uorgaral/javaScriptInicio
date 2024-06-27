const prompt = require("prompt-sync")();
const celsius = Number(prompt("temperatura: "));
const farenheit = Number(celsius * 1.8 + 32);

console.log(farenheit);
