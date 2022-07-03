let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

console.log (varA, varB, varC);

let letra1 = varA;
let letra2 = varB;
let letra3 = varC;

varA = varB;
varB = varC;
varC = letra1;

console.log (varA, varB, varC);

// Outra solução 
let alfabeto1 = 'A';
let alfabeto2 = 'B';
let alfabeto3 = 'C';

[alfabeto1, alfabeto2, alfabeto3] = [alfabeto2, alfabeto3, alfabeto1];

console.log (alfabeto1, alfabeto2, alfabeto3);

