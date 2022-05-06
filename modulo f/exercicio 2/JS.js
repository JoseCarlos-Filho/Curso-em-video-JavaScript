let num = document.querySelector('.Numero');
let tabela = document.getElementById('seltab');
let lista = [];
let res = document.querySelector('div#res');

// função para verificar se é numero ou não
function eNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true;
    } 
    else {
        return false;
    }
}

// função se está na lista
function estaNaLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true;
    }
    else {
        return false;
    }
}

function adicionar() {

    if (eNumero(num.value) && !estaNaLista(num.value, lista)) {
        // alert('Tudo OK')
        lista.push(Number(num.value));
        let item = document.createElement('option'); // elemento adicinado de forma dinâmica
        item.text = `Valor ${num.value} adicionado`;
        tabela.appendChild(item);
    } else {
        alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus();
}

function finalizar() {
    if ( lista.length == 0) {
        alert('Adicione valores antes de finalizar!');
    } else {
        let totalElementos = lista.length;
        res.innerHTML = '';
        res.innerHTML += `<p>${totalElementos} Elementos cadastrados.</p>`
        resultadoValores();
    }
}

function resultadoValores() {
    let maior = lista[0];
    let menor = lista[0];
    let soma = 0;
    let media = 0;

    for(let pos in lista) {
        soma += lista[pos];
        if (lista[pos] > maior) {
            maior = lista[pos];
        }
        if (lista[pos] < menor) {
            menor = lista[pos];
        }
    }
    media = soma / lista.length;
    return(res.innerHTML += `<p>Maior valor da Lista é : ${maior}.</p>`, 
           res.innerHTML += `<p>Menor valor da Lista é : ${menor}.</p>`,
           res.innerHTML += `<p>Soma total dos valores da Lista é : ${soma}.</p>`,
           res.innerHTML += `<p>Média dos valores da Lista é : ${media}.</p>`);
    
}