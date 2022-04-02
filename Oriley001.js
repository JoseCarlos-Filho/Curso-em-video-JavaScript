var x = 2;
var y = 3;

// Função com passagem de parametros
function plus1(x) {
    return x + 1;
}

console.log(plus1(x));

plus1(y);

console.log(plus1(y));

// Variavel squaress recebe função function(x) que calcula o quadrado.
var squaress = function(x) {
    return x*x;
}

console.log(squaress(y));

// Chamada de duas funções, pluss1 logo retorno da função executa função da variavel squaress
console.log(squaress(plus1(y)));

// Trabalhando com array de forma simples.
var a = [];
a.push(1,2,3,4);  // Comando push adiciona informações no array "a"   
a.reverse();      // Comando reverse inverte a ordenação do array
console.log(a);

// Também podemos definir nossos próprios métodos. A palavra-chave "this" se refere ao
// objeto no qual o método é definido: neste caso, o array de pontos anterior.

pontos.dist = function() {

    var p1 = this[0];
    var p2 = this[1];
    var a = p2.x - p1.x; 
    var b = p2.y - p1.y; 
    return Math.sqrt(a * a + b * b);

};

pontos.dist();
console.log(pontos.dist);














