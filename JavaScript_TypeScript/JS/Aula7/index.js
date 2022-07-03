// let nome = 'João'; // String

// console.log(nome, 'nasceu 1984.');
// console.log('Em 2000', nome, 'conheceu Maria.');
// console.log(nome, 'casou-se com Maria em 2012.');
// console.log('Maria teve 1 filho com', nome, 'em 2015.');
// console.log('O filho de', nome, 'se chama Eduardo.');

// Não podemos criar constantes com palavras reservadas
// Constantes precisam ter nomes significativos com
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços e traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variaveis com let
// Nao pode modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE LET

let nome = 'João';
console.log(nome);
nome = 'Otávio';
console.log(nome);

const primeiroNumero = 5;
const segundoNumero = 10;
const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log("Resultado duplicado : " + resultadoDuplicado);
let resultadoTriplicado = resultado * 3;
console.log("Resultado triplicado : " + resultadoTriplicado);
resultadoTriplicado = resultadoTriplicado + 5;
console.log("Resultado triplicado + 5 : " + resultadoTriplicado);

// para saber o tipo de dado da variavel ( se é String ou Number ).
console.log("Tipo de dado é :" + typeof(primeiroNumero));