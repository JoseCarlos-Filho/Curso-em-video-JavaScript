const nome = document.querySelector('#nomeUser');
const sobrenome = document.querySelector('#sobrenomeUser');
let peso = document.querySelector('#pesoUser');
let altura = document.querySelector('#alturaUser');
let resultado = document.querySelector('.resultado');


function enviar() {
    // console.log(nome.value, sobrenome.value, peso.value, altura.value);
    let pessoas = [];

    const pessoaObjeto = {
        nome: nome.value, 
        sobrenome: sobrenome.value,
        peso: peso.value,
        altura: altura.value
    };

    pessoas = pessoaObjeto;

    resultado.innerHTML = `<p>
            ${pessoas.nome}
            ${pessoas.sobrenome}
            ${pessoas.peso}
            ${pessoas.altura}
        </p>`;

    return resultado;
}