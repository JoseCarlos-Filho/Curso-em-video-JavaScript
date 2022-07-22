//String são indexidos, são arrays
const alunos = 'Jose Carlos Rodrigues';

// em uma coleção de dados no array é indexado de forma independente
//                  0       1           2
const aprendiz = ['Jose', 'Carlos', 'Rodrigues'];

// substitundo e incluindo dados em um array
aprendiz[0] = 'João';
aprendiz[3] = 'Filho';

// adicionando dados de forma dinamica no final do array
aprendiz.push('luiz');
aprendiz.push('Marcos');

// adicionando dados no inicio do array
aprendiz.unshift('Manoel');
aprendiz.unshift('Pedro');

//  removendo dados do final do array e guardando o dado removido em uma variavel
const removido = aprendiz.pop();

//  removendo dados do inicio do array e guardando o dado removido em uma variavel
const deletado = aprendiz.shift();

// deletando um elemento do array
delete aprendiz[5];

console.log(aprendiz);
console.log(aprendiz.length);
console.log(aprendiz[5]);
