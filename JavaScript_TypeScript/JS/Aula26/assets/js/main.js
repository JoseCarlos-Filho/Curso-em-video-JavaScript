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

        // verifica se o usuário digitou ou não um peso válido
        // E verifica se o usuário digitou uma altura válido
        if(peso === "" || isNaN(peso)) {
            resultado.innerHTML = `<span>Digite um valor de peso válido!!!</span>`
        } else if (altura === "" || isNaN(altura)) {
            resultado.innerHTML = `<span>Digite um valor de altura válido!!!</span>`
        } else {

            // Calculo do IMC
            let IMC = (peso / (altura * altura)).toFixed(1);
            // vizualização do resultado
            console.log(IMC);

            // verificação do IMC calculado
            if (IMC < 18.5) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Abaixo do peso)</span>
                `;
            } else if (IMC >= 18.5 && IMC < 25) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Peso normal)</span>
                `;
            }  else if (IMC >= 25 && IMC < 30) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Sobrepeso)</span>
                `;
            }  else if (IMC >= 30 && IMC < 35) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Obesidade grau 1)</span>
                `;
            }  else if (IMC >= 35 && IMC < 40) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Obesidade grau 2)</span>
                `;
            }  else if (IMC >= 40 && IMC ) {
                resultado.innerHTML = `
                    <span>Seu IMC é ${IMC} (Obesidade grau 3)</span>
                `;
            } 

        }

    }

    formulario.addEventListener('submit', eventoForm);

}

telaPrincipal();
