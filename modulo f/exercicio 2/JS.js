let num = Number(document.querySelector('.Numero').value);
let tab = document.getElementById('seltab');
let array = [];
let res = document.querySelector('div#res');

function adicionar() {


    if (num == '') {
        alert(`Por favor, digite um número!`);

    } else {
        tab.innerHTML = '';
        for (let i = 1; i <= num; i++) {
            let item = document.createElement('option');
            item.text = `Valor ${num} Adicionado`
            tab.appendChild(item);
            array = num;
        }
    }

    function finalizar() {

    }

    // if (num == 0) {
    //     alert(`Por favor, digite um número!`);
    // }
    // else {
    //     tab.innerHTML = '';
    //     for (let i = 1; i <= 10; i++) {
    //         let item = document.createElement('option'); // cria o elemento OPTION da tag <select></select>
    //         item.text = `${num} x ${i} = ${num*i}`; // imprime as informações com a multiplicação na tabela
    //         item.value = `tab${i}`; // seleciona o valor da tabela 
    //         tab.appendChild(item); // adiciona os elementos de forma sequencial na tabela
    //     }

    // }
}