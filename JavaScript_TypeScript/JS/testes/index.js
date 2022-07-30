function telaPrincipal() {
    const formulario = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    function eventoForm (evento) {

        evento.preventDefault();

        const nome = formulario.querySelector('#nomeUser');
        const sobrenome = formulario.querySelector('#sobrenomeUser');
        const peso = formulario.querySelector('#pesoUser');
        const altura = formulario.querySelector('#alturaUser');

        pessoas.push ({
            nome: nome.value, 
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>
                ${nome.value} ${sobrenome.value}` +
                `${peso.value} ${altura.value}</p>`;
    }

    formulario.addEventListener('submit', eventoForm);

    // function enviar() {
    //     // console.log(nome.value, sobrenome.value, peso.value, altura.value);
    //   return resultado;
    // };
}

telaPrincipal();