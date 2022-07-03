// String são indexisaveis ou arrays de caracteres.
//               01234567
let umaString = "Um texto";

console.log(umaString);
console.log(umaString[0]);
console.log(umaString.charAt(1));
// concatenando valores em uma string
console.log(umaString.concat(' em um lindo dia. 1'));
console.log(umaString + ' em um lindo dia. 2');
// utilizando template string: ${umaString}
console.log(`${umaString} em um lindo dia. 3`);

// Buscando um indice de alguma informação na string.
console.log(umaString.indexOf('texto')); // mostra o indice 3.

// buscando palavra apartir de um indice.
console.log(umaString.indexOf('o', 3)); // busca letra o apartir do indice 3 da string, crescente 3 -> 4 -> 5 -> 6 -> 7 etc...

console.log(umaString.lastIndexOf('m', 3)); // busca decrescente no caso começando no indice 3 -> 2 -> 1 -> 0.

// expressões regulares
console.log(umaString.match(/[a-z]/g)); // pega todas as letras minusculas de a-z
console.log(umaString.match(/[a-z]/));

// expressões regulares utilizando search tem definição parecida com indexof
console.log(umaString.search(/x/));

// utilização do replace, substituir um STRING por outra.
// também funciona com expressões regulares
console.log(umaString.replace('Um', 'Outra'));
console.log(umaString.replace(/Um/, 'O'));

// manipulando array da string.
let fraseRato = "O rato roeu a roupa do rei de roma.";
console.log(fraseRato.replace(/r/, '#'));
console.log(fraseRato.replace(/r/g, '#'));

// pegar o tamanho da string.
console.log(fraseRato.length);
// fatiano a string ou uma faixa da strings
console.log(fraseRato.slice(2, 6));

// trabaçhando com valores negativos.
console.log(fraseRato.slice(-3)); // pega o tamanho do array menos três.
// que é o mesmo que:
console.log(fraseRato.slice(32));
console.log(fraseRato.slice(-5, -1)); 

// dividindo uma string utilizando o split()
console.log(fraseRato.split(' ', 3));

// uppercase e lowercase
console.log(fraseRato.toUpperCase());
console.log(fraseRato.toLowerCase());