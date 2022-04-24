
function contar() {
    let ini = document.querySelector('.enterNumber1').value;
    let fim = document.querySelector('.enterNumber2').value;
    let passo  = document.querySelector('.enterPasso').value;
    let res = document.getElementById('res');

    if (ini == 0 || fim == 0 || passo == 0) {
        alert('[ERRO!] Faltando informações!')
    }
    else {
        res.innerHTML = 'Contando: '

       for(let i = ini; i <= fim; i += passo) {
           res.innerHTML += `${i} \u{1F449}`
       }
    }
}
