function telaPrincipal(){
    const formulario = document.querySelector('.form-input');
    const resultado = document.querySelector('.result');

    function eventoForm (evento) {
        evento.preventDefault();

        let peso = parseInt(formulario.querySelector('#input-peso').value);
        let altura = parseFloat(formulario.querySelector('#input-altura').value);
        console.log(peso);
        console.log(altura);

        let IMC = (peso / (altura * altura)).toFixed(1);
        console.log(IMC);

        
        
        if (IMC > 18.5) {
            resultado.innerHTML = `
                <span>Abaixo do peso</span>
            `;
        } else if (IMC >= 18.5 && IMC < 25) {
            resultado.innerHTML = `
                <span>Peso normal</span>
            `;
        }

    }

    formulario.addEventListener('submit', eventoForm);

}

telaPrincipal();
