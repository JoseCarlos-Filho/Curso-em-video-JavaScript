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

const vaiExecutar = false;

console.log(!vaiExecutar && falaOi());