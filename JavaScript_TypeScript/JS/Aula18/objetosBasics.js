// const array = [1,2,3];
let array = [1,2,3];
array.push(4);
array[0] = 'José';
// array = 'Outra'; este comando não pode ser utilizado quando a variavel é uma constante
array = 'Opa';
console.log(array);

// criando um Array de Objeto através de função
function criaPessoa (nome, sobrenome, idade) {
    // return {
    //     nome: nome,
    //     sobrenome: sobrenome,
    //     idade: idade
    // };
    return { nome, sobrenome, idade };
}

const pessoa1 = criaPessoa('José', 'Carlos', 25);
const pessoa2 = criaPessoa('Maria', 'Lavaindo', 40);
const pessoa3 = criaPessoa('Pedregunda', 'Pedregulho', 45);
const pessoa4 = criaPessoa('Mariosvalda', 'Minerva', 55);
const pessoa5 = criaPessoa('Jequitinhonha', 'Barros', 65);
console.log(pessoa1.nome, pessoa3.nome);

// Neste contexto a palavra reservado this faz referência ao objeto pearson.
// acessando os atributos do objeto, neste exemplo faz a mesma coisa que pearson.fala();
const pearson = {
    nome: 'José',
    sobrenome: 'Carlos',
    idade: 37,

    

    fala() {
        // console.log('Hello world!')
        // console.log(`${this.nome} ${this.sobrenome} está falando oi...`),
        console.log(`A minha idade atual é ${this.idade}.`)
    },

    incrementaIdade() {
        this.idade++;
    }
};

pearson.fala();
pearson.incrementaIdade();
pearson.fala();
pearson.incrementaIdade();
pearson.fala();
pearson.incrementaIdade();
pearson.fala();
pearson.incrementaIdade();