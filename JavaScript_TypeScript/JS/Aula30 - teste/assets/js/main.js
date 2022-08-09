// function getDayWeek (diaSemana) {
//     let dayWeekText = '';
//     switch (diaSemana) {
//         case 0: 
//             dayWeekText = 'domingo';
//             break;
//         case 1: 
//             dayWeekText = 'segunda-feira';
//             break;
//         case 2: 
//             dayWeekText = 'terça-feira';
//             break;
//         case 3: 
//             dayWeekText = 'quarta-feira';
//             break;
//         case 4: 
//             dayWeekText = 'quinta-feira';
//             break;
//         case 5: 
//             dayWeekText = 'sexta-feira';
//             break;
//         case 6: 
//             dayWeekText = 'sábado';
//             break;
//         default:
//             dayWeekText = '';
//     }
//     return dayWeekText;
// }

// function getMonth (mes) {
//     let monthText = '';
//     switch (mes) {
//         case 0: 
//             monthText = 'Janeiro';
//             break;
//         case 1: 
//             monthText = 'Fevereiro';
//             break;
//         case 2: 
//             monthText = 'Março';
//             break;
//         case 3: 
//             monthText = 'Abril';
//             break;
//         case 4: 
//             monthText = 'Maio';
//             break;
//         case 5: 
//             monthText = 'Junho';
//             break;
//         case 6: 
//             monthText = 'Julho';
//             break;
//         case 7: 
//             monthText = 'Agosto';
//             break;
//         case 8: 
//             monthText = 'Setembro';
//             break;
//         case 9: 
//             monthText = 'Outubro';
//             break;
//         case 10: 
//             monthText = 'Novembro';
//             break;
//         case 11: 
//             monthText = 'Dezembro';
//             break;
//         default:
//             dayWeekText = '';
//     }
//     return monthText;
// }

// function zeroAEsquerda (num) {
//     return num >= 10 ? num : `0${num}`;
// }

// function getData () {
//     const spanCompletDate = document.querySelector('.dataCompleta');
//     const data = new Date();

//     const dayWeek = data.getDay();
//     const monthDay = data.getMonth();


//     console.log(getDayWeek(dayWeek), getMonth(monthDay));

//     spanCompletDate.innerHTML = `${getDayWeek(data.getDay())}, ${data.getDate()}` +
//                                 ` de ${getMonth(monthDay)} de ${data.getFullYear()}` +
//                                 ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
// }

// getData();

/*
Outra forma de resolver a exibição da data utiulizando a documentação
na MDN : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Date
Sempre olhar a documentação por existir métodos para a resolver muito simples.
*/

// poucas linhas de código resolve o problema....inacreditavel....kkkkkk
const spanCompletDate = document.querySelector('.dataCompleta');
const data = new Date();
const opcoes = {
    dateStyle: 'full',
    // timeStyle: 'short'
};
/*  
    Para esta solução o código comentando // spanCompletDate.innerHTML = data.toLocaleDateString('pt-BR', opcoes);
    Apresentava o seguinte erro: uncaught TypeError: Invalid option : timeStyle at Date.toLocaleDateString (<anonymous>)
    Para esta solução a partir de 2020 houve alterações na exibição do formato da hora, solução encontrada no site a seguir:
    https://stackoverflow.com/questions/65021891/for-javascripts-tolocaledatestring-are-there-new-standards-to-replace-datestyl
    A documentação da MDN ainda não possui informações de alterações do formato até o presente momento.
*/
const dateCompleto = new Intl.DateTimeFormat('pt-BR', { dateStyle: "full", timeStyle: "short" }).format(new Date())
spanCompletDate.innerHTML = dateCompleto;
// spanCompletDate.innerHTML = data.toLocaleDateString('pt-BR', opcoes);