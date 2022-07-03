// Dados primitivos: String, number, undefined, null, boolean, symbol.
// Strings
const nome = 'Luiz';
const nome1 = "Luiz";
const nome2 = `Luiz`;

// Number
const num1 = 10;
const num2 = 10.52;

// undefined = não aponta para lugar nenhum na memória.
let nomeAluno; 

// Nulo = Geralmente utilizado pelo desenvolvedor para configurar uma variavel
// de forma que a variavel não aponte para nenhum lugar da memoria. 
let sobrenomeAluno = null; 

// variaveis booleanas possui dois valores: true/false(valores lógicos);
const aprovado = true; 

// verificando o tipo da variavel.
console.log(typeof nome);
console.log(typeof nome1);
console.log(typeof nome2);
console.log(typeof (num1, num2));
console.log(typeof nomeAluno);
console.log(typeof sobrenomeAluno);
console.log(typeof aprovado);
// console.log(typeof(nome, nome1, nome2, num1, num2, nomeAluno, sobrenomeAluno, aprovado));

let a = 2;
const b = a;
console.log(a, b);

a = 3;
console.log(a, b);