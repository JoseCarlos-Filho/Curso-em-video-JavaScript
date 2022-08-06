// Capturando evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    // console.log('Evento submit previnido');
    // setResultado('Ola mundo!');

    // Capturando os campos: peso e altura do form.
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');
    
    console.log(inputPeso.value);
    console.log(inputAltura.value);

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);

    // checa se os campos estão com informações válidas.
    if (!peso) {
        setResultado('Peso inválido', false);
        return;
    }

    if(!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    // console.log('ta fununciano a bagassa!');

    const imc = getImc(peso, altura);
    const levelImc = getLevelImc(imc);

    const msg = `Seu IMC é ${imc} (${levelImc}).`;
    
    setResultado(msg, true);

    // console.log(imc, levelImc);
});

function getLevelImc (imc) {
    const level = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 
                    'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];
    
    if(imc >= 39.9) return level[5];
    if(imc >= 34.9) return level[4];
    if(imc >= 29.9) return level[3];
    if(imc >= 24.9) return level[2];
    if(imc >= 18.5) return level[1];
    if (imc < 18) return level[0];
}

// função que calcula o IMC
function getImc(peso, altura) {
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}

// refatorando a função setResultado(), função que cria o paragrafo.
function criaParagrafo () {
    // criando um elemento html, neste caso paragrafo p;
    const p = document.createElement('p');
    return p;
}

// função que mostra o resultado
function setResultado (msg, isValid) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML= '';
    
    const p = criaParagrafo();

    if (isValid) {
        p.classList.add('paragrafo-resultado');
    } else {
        p.classList.add('bad');
    }

    p.innerHTML = msg;
    // adiciona um elemento filho na div resultado.
    resultado.appendChild(p);
}