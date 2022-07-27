/* 
Primitivos (imutáveis) - string, number, boolean, undefined, null(bigint, symbol)

Referência (mútavel) - array, object, function - Passados por referência
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

// exemplo de valores por referência.
let c = [1, 2, 3];
let d = [...c]; // faz uma cópia do array c
let e = d;
console.log(c, d);

c.push(4);
console.log(c, d);

d.pop();
console.log(c, d);

c.push('Jose');
console.log(e);