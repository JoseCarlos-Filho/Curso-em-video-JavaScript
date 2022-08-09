// Outra forma de solucionar este exercício é utilizar Arrays
function getDayWeek (diaSemana) {
    let dayWeekText = ['domingo', 'segunda-feira', 'terça-feira', 
                    'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado'];
    
    return dayWeekText[diaSemana];
}

function getMonth (mes) {
    let monthText = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    
    return monthText[mes];
}

function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
}

function getData () {
    const spanCompletDate = document.querySelector('.dataCompleta');
    const data = new Date();

    const dayWeek = data.getDay();
    const monthDay = data.getMonth();


    console.log(getDayWeek(dayWeek), getMonth(monthDay));

    spanCompletDate.innerHTML = `${getDayWeek(data.getDay())}, ${data.getDate()}` +
                                ` de ${getMonth(monthDay)} de ${data.getFullYear()}` +
                                ` ${zeroAEsquerda(data.getHours())}:${zeroAEsquerda(data.getMinutes())}`;
}

getData();