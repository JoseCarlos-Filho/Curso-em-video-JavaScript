const pontuacaoUsuario = 500;

// if (pontuacaoUsuario >= 1000) {
//     console.log('Usuário VIP');
// } else  {
//     console.log('Usuário normal');
// }

// Operação ternária que faz a mesma coisa que o if else acima.
// (condição) ? 'Valor verdadeiro' : 'Valor falso'
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuário VIP' : 'Usuário normal';

const corUsuario = null;
const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao);
