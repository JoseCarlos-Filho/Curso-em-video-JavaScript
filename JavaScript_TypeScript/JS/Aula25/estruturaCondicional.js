// Utilizando numeros e avaliando comportamento. Estrutura Condicional

// const numero = 10;

// if (numero >= 0 && numero <= 5) {
//     console.log('Sim, o número esta entre 0 e 5.');
// } else {
//     console.log('o numero NÃO esta entre 0 e 5');
// }

const num = 10;

if (num <= 10) {
    console.log('O número é menor ou igual a 10');
}

if (num >= 0 && num <= 5) {
    console.log('O número está entre 0 e 5.');
} else if (num >= 6 && num <= 8) {
    console.log('O número está entre 6 e 8.');
} else if (num >= 9 && num <= 11) {
    console.log('O número está entre 9 e 11.');
} else {
    console.log('O número não está entre 0 e 11.');
}

console.log('...Continuação do código JavaScript');