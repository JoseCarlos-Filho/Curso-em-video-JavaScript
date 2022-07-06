let num1 = 1; // number
let num2 = 2.5; // Number

// transformand number em string
// nesta operação o numero num1 se torna uma string
// concatenando seu valor com num2
console.log(num1.toString() + num2);
console.log(typeof num1);

// Defini o numero de casas decimais a serem exibidas
let numero1 = 10.5789551255547; //number
console.log(numero1.toFixed(2));
console.log(numero1.toFixed(4));

// verifica se uma informação passada para a variavel é um inteiro.
// retornando um valor booleano.
let valorLiteral = 10 //number
console.log(Number.isInteger(valorLiteral));
