// Capturando evento de submit do formulário
const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('Evento submit previnido');
    setResultado('Ola mundo!');
});

function setResultado (msg) {
    const resultado = document.querySelector('.resultado');
    resultado.innerHTML= '';
    
    // criando um elemento html, neste caso paragrafo p;
    const p = document.createElement('p');
    p.classList.add('paragrafo-resultado'); // adicionando uma classe na lista de classes deste paragrafo.
    p.innerHTML = 'teste OK!';

    // adiciona um elemento filho na div resultado.
    resultado.appendChild(p);

}

function checkFormulario () {
    
}