// IEEE 754-2008 Este é o padrão que o javascript segue para 
// formatação e precisão dos números com casas decimais
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

// verificando um not a number
let temp = num1 * 'Ola';
console.log(Number.isNaN(temp));

// somando um numero com um numero dentro das aspas ou seja uma string
// este tipo de operação provaca a concatenação de dois valores
let qualquercoisa = num1 + '5';
console.log(qualquercoisa);

// trabalhando com casas decimais 
let valor1 = 0.7; // number
let valor2 = 0.1; // number
let valor3 = 0;

valor1 += valor2; // 0.8
valor1 += valor2; // 0.9
valor1 += valor2; // 1.0

valor3 = valor1;
valor1 = valor1.toFixed(2);

console.log("resultado da operação :" + valor1);
console.log("retorno do tipo de dado é :" + Number.isInteger(valor1)); // não diz que é inteiro

valor3 = parseFloat(valor3.toFixed(2)); // esta operação transfere valor flutuante
console.log("retorno do tipo de dado é :" + Number.isInteger(valor3)); // resolvendo o problema com valor flutuante.

// Outar forma de trabalhar com ponto flutuante e resolver o problema com casas deccimais do padrão IEEE 754-2008
let v1 = 0.7; // number
let v2 = 0.1; // number

v1 = ((v1 * 100) + (v2 * 100)) / 100; // 0.8
v1 = ((v1 * 100) + (v2 * 100)) / 100; // 0.9
v1 = ((v1 * 100) + (v2 * 100)) / 100; // 1.0

console.log("resultado da operação :" + v1);
console.log("retorno do tipo de dado é :" + Number.isInteger(v1));
