let valor_1 = 9.54578;

// arredondar casas decimais de forma decrescente
let valor_2 = Math.floor(valor_1);
console.log("arredonda para baixo :" + valor_2);

// arredondar casas decimais de forma crescente
let valor_3 = Math.ceil(valor_1);
console.log("arredonda para cima :" + valor_3);

//arrendonda para cima ou para baixo
let v1 = 9.49;
let valor_4 = Math.round(v1);
console.log("arredonda para cima ou pra baixo :" + valor_4);

// encontrar o maior valor em uma sequência numerical de
console.log("Maior valor : " + Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// encontra o menor valor
console.log("Menor valor : " + Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 9, 8, 7, 6));

// fazendo o sorteio de numero aleatório entre 5 e 100
const aleatorio = Math.round(Math.random() * (10 - 5) + 5);
console.log(aleatorio);

// pegando o valor de PI
console.log("valor de PI :" + Math.PI);

// Potenciação
console.log("Valor da operação com potência :" + Math.pow(2, 10));

// devolvendo um valor Infinity
console.log(100 / 0);
