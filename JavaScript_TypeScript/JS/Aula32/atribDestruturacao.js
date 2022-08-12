// let a = 'A'; // B
// let b = 'B'; // C
// let c = 'C'; // A

// const numeros = [b, c, a]; // atribuindo de forma desestruturada.
// [a, b, c] = numeros;

// console.log(a, b, c);

// indice        0  1  2  3  4  5  6  7  8
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const primeiroNumero = numeros[0];
// console.log(primeiroNumero);
// const [um, dois, tres,  ...resto] = numeros;
// ...resto é um operador chamado ...rest pega o resto do array
// O operador ...spread distribui as informações do array. 
const [um, , tres, , cinco, , sete] = numeros;
console.log(um, tres, cinco, sete);
// console.log(resto);


// Arrays dentro de um Array
const num = [ 
    [1, 2, 3], 
    [4, 5, 6], 
    [7, 8, 9]
]
const [lista1, lista2, lista3] = num;
console.log(lista3[2]);