let valores = [1, 9, 4, 8, 7, 5, 6]

// Forma tradicional de correr um array
// for (let pos = 0; pos < valores.length; pos++) {
//     console.log(`A posição ${pos} tem o valor : ${valores[pos]}`);
// }

// Forma mais atual para percorrer um array
valores.sort()
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor : ${valores[pos]}`);
}

let posicao = valores.indexOf(3);

// Em array com o valor não é encontrado o JavaScript retorna -1
if (posicao == -1) {
    console.log(`O valor não foi encontrado!`);
} else {
    console.log(`O valor está na posição : ${posicao}`);
}