// declaração clássica de funções
function saudacao(nome) {
    // console.log(`Bom dia ${nome}!`);
    // return 123456;
    return `Bom dia ${nome}!`;
}

// saudacao('Luiz');
// saudacao('José');

const variavel = saudacao('Mundo');
console.log(variavel);

function soma(x, y) {
    const result = x + y;
    console.log('Ola mundo');
    return result;
    console.log('Ola mundo'); // este comando não será executado pq return é o ultimo comando da função.
}

console.log(soma(2, 3));
console.log(soma(4, 3));
console.log(soma(2, 10));

// declarando nome de variavel igual o que esta na função de
// a variavel dentro da função não interfere na variavel declarada fora da função
// variaveis dentro do escopo da função tem somente visibilidade dentro da função.
const result = soma(2, 2);
console.log(result);

// retornando um NaN, os dois valores x e y são valores indefinidos na chamada da função.
const resultado = soma();
console.log(resultado);

// concatenando strings na soma da função
const nome = soma('José', ' Carlos');
console.log(nome);

// maneira diferente de declarar e chamar uma função.
const raiz = function (n) {
    return n ** 0.5;
};

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(25));

// declaração de uma arrow Function executa da mesma forma que a função acima
// 'n' é o parâmetro que esta sendo passado para função (parâmetro unico)
//  não precisa utilizar o 'return' para retornar valor na função.
const raizQuadrada = n => n ** 0.5;
console.log(raizQuadrada(64));

