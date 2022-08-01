/* 
&& -> false && true -> false
|| -> false || true -> true

FALSY
false
0
'' "" ``
null / undefined
NaN
*/
console.log('Luiz' && 'Maria');
console.log('Luiz' && 0 && 'Maria');
console.log('Luiz' && '' && 'Maria');
console.log('Luiz' && null && 'Maria');
console.log('Luiz' && undefined && 'Maria');

// Avaliaçãode curto circuito
function falaOi () {
    return 'Oi';
}

const vaiExecutar = 'José';

console.log(vaiExecutar && falaOi());

// Operador OU ||
// retorna o primeira expressão verdadeira no caso 'José'
console.log(0 || false || null || 'José' || true);