// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
// const tresHoras = 60 * 60 * 3 * 1000; // calculo de tempo em milisegundos
// const umDia = 60 * 60 * 24 * 1000; // calculo de tempo em milisegundos
// const data = new Date(0 + tresHoras + umDia); // 01/01/1970 timestamp unix ou época unix

//const data = new Date(2019, 3, 20, 15, 14, 27); // ano, mes, dia, hora, minuto, segundo, milésimosesegundo.

//const data = new Date('2019-04-20 20:20:59'); // passando parametro de data por string
//const data = new Date(1659993312348); // passando a data em milisegundos

// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth());
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('MiliSeg', data.getMilliseconds());
// console.log('Dia semana', data.getDay());
// console.log(data.toString());
//console.log(Date.now());

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}


function formataData (data) {
    // console.log(data);
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataHoje = new Date();
const dataBrasil = formataData(dataHoje);
console.log(dataBrasil);