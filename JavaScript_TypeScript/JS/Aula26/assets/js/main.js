function telaPrincipal(){
    const formulario = document.querySelector('.form-input');
    const resultado = document.querySelector('.result');

    function eventoForm (evento) {
        evento.preventDefault();

        const peso = formulario.querySelector('#input-peso');
        const altura = formulario.querySelector('#input-altura');
        console.log(peso.value);
        console.log(altura.value);

    }

    formulario.addEventListener('submit', eventoForm);

}

telaPrincipal();
