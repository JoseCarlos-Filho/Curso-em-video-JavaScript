function contar() {

    let ini = Number(document.querySelector('.enterNumber1').value);
    let fim = Number(document.querySelector('.enterNumber2').value);
    let passo  = Number(document.querySelector('.enterPasso').value);
    let res = document.getElementById('res');

    if (ini == 0 || fim == 0 || passo == 0) {
        res.innerHTML = 'Impossivel Contar !'
        // alert('[ERRO!] Faltando informações!')
    }
    else {
        res.innerHTML = 'Contando: <br>'

        if(passo <= 0) {
            alert(`Passo inválido! Considerando PASSO 1`);
            passo = 1;
        }

        if (ini < fim) {
            for(let i = ini; i <= fim; i += passo) {
                res.innerHTML += `${i} \u{1F449}`
            }
            
        }
        else {
            for(let i = ini; i >= fim; i -= passo) {
                res.innerHTML += `${i} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
