let num = [5, 8, 2, 9, 3]

console.log(`Esse é o nosso vetor num: ${num}`);
console.log(num);

// inserindo valor de foma fixa
 num[5] = 1;

 console.log(num);

// inserindo valor na ultima posição do array
num.push(7);

console.log(num);

// Tamanho do vetor
console.log(`Tamanho do vetor é: ${num.length}`);

// ordena o vetor.
num.sort()

console.log(num);
// mostra a primeira posição do vetor
console.log(`O primeiro valor do vetor é: ${num[0]}`)