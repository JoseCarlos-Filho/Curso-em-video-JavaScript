function telaPrincipal(){
    // Carrega o form no na variavel formulario
    const formulario = document.querySelector('.form-input');
    // Carrega o elemento result na variavel resultado.
    const resultado = document.querySelector('.result');

    function eventoForm (evento) {
        evento.preventDefault();

        // carrega os dados dos repsectivos campos do formulário nas variaveis peso e altura
        let peso = parseInt(formulario.querySelector('#input-peso').value);
        let altura = parseFloat(formulario.querySelector('#input-altura').value);
        
        // teste de vizualização dos dados no console.log
        console.log(peso);
        console.log(altura);

        // Calculo do IMC
        let IMC = (peso / (altura * altura)).toFixed(1);
        // vizualização do resultado
        console.log(IMC);

        // verifica se o usuário digitou ou não um peso válido
        // E verifica se o usuário digitou uma altura válido
        if(peso === "" || isNaN(peso)) {
            resultado.innerHTML = `<span>Digite um valor de peso válido!!!</span>`
        } else if (altura === "" || isNaN(altura)) {
            resultado.innerHTML = `<span>Digite um valor de altura válido!!!</span>`
        } else if (peso === "" || altura ==="") {
            resultado.innerHTML = `<span>Preencha os campos adequadamente!!!</span>`
        }

        
        // if (IMC > 18.5) {
        //     resultado.innerHTML = `
        //         <span>Abaixo do peso</span>
        //     `;
        // } else if (IMC >= 18.5 && IMC < 25) {
        //     resultado.innerHTML = `
        //         <span>Peso normal</span>
        //     `;
        // }

    }

    formulario.addEventListener('submit', eventoForm);

}

telaPrincipal();
