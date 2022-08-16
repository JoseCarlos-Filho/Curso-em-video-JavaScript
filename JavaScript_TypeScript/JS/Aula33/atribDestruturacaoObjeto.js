const pessoa = {
    nome: 'José',
    sobrenome: 'Carlos', 
    idade: 37,
    endereco: {
        rua: 'Av Brasil',
        numero: 320
    }

};

// Atribuição via desestruturação em Objetos
// const { nome } = pessoa;
// console.log(nome);

// const { nome = 'Inexistente', sobrenome } = pessoa;
// console.log(nome, sobrenome);

// Alterando o nome da variavel de um Objeto do tipo Array
// Isso tambem é possivel em arrays comuns.log
// neste exemplo substituimos a  variavel nome passando a chave do campo que é nome
// e substituindo pela variavel 'teste'

// const { nome: teste = '', sobrenome } = pessoa;
// console.log(teste, sobrenome);

// const { nome, sobrenome } = pessoa;
// console.log(nome, sobrenome);


// Exibindo os atributos de endereço e chamando o objeto endereço de forma direta.
// atribuindo 'r' na variavel rua e redefinindo sua informações
// const{ 
//         endereco: { rua: r = 123456, numero },
//         endereco 
//         } = pessoa;
// console.log(r, numero, endereco);

const { nome, ...resto } = pessoa;
console.log(nome, resto);