/* 
Operadores Lógicos
&& -> AND -> E -> Todas as expressões precisam ser verdadeiras para retornar TRUE
|| -> OR -> OU => Apenas umas das expressões precisa ser verdadeiro para retornar verdadeiro.
! -> NOT -> NÃO
*/

const expressaoAnd = true && true && true && true;
const expressaoOr = false || false || true || false;
console.log(expressaoOr);
console.log(expressaoAnd);

// exemplo de utilização simples de operadores lógicos.
const usuario = 'Luiz';
const senha = '123456';

const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log(vaiLogar);

const nome = 'José';

if(!nome) {
    console.log('Dado incorreto');
} else {
    console.log(nome);
}