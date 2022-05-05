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
        // tab.innerHTML = '';
        // for (let i = 1; i <= num; i++) {
        //     let item = document.createElement('option');
        //     item.text = `Valor ${num} Adicionado`
        //     tab.appendChild(item);
        //     array = num;
        // }
    }
    num.value = ''
    num.facus()
}