/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null(bigint, symbol)
*/

// exemplo de VALOR imutável neste caso um dado do tipo string
// neste exemplo ao tentar atribuir a letra 'R' na posição 0 do array de string a opearação não é aceita
// por que a string tem o seu VALOR imutável, não pode ser modificada.
let nome = 'Jose';
nome[0] = 'R';
console.log(nome[0], nome);

let a = 'A';
let b = a; // Cópia do valor de a
console.log(a, b);

a = 'Outra coisa'
console.log(a, b);