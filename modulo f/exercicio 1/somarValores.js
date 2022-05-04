function soma(n1, n2) {
    return n1 + n2;
}

console.log(soma(2, 5));
// gera um NaN Not a Number caso e passado somente um parâmetro para a função de
// console.log(soma(7));

// Usando função com parametros pre definidos
// neste caso é possivel passar somente um ou nenhum paramtero para a função.
function adicao(num1 = 0, num2 = 0) {
    return (num1 + num2);
}

console.log(adicao(20));

let v = function(x) {
    return x*2;
}

console.log(`valor da variavel v : ${v(5)}`);
