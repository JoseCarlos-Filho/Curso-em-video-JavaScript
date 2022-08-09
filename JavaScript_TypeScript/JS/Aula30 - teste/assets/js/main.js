function getDayWeek (diaSemana) {
    let dayWeekText = '';
    switch (diaSemana) {
        case 0: 
            dayWeekText = 'domingo';
            break;
        case 1: 
            dayWeekText = 'segunda-feira';
            break;
        case 2: 
            dayWeekText = 'terça-feira';
            break;
        case 3: 
            dayWeekText = 'quarta-feira';
            break;
        case 4: 
            dayWeekText = 'quinta-feira';
            break;
        case 5: 
            dayWeekText = 'sexta-feira';
            break;
        case 6: 
            dayWeekText = 'sábado';
            break;
        default:
            dayWeekText = '';
    }
    return dayWeekText;
}

function getMonth (mes) {
    let monthText = '';
    switch (mes) {
        case 0: 
            monthText = 'Janeiro';
            break;
        case 1: 
            monthText = 'Fevereiro';
            break;
        case 2: 
            monthText = 'Março';
            break;
        case 3: 
            monthText = 'Abril';
            break;
        case 4: 
            monthText = 'Maio';
            break;
        case 5: 
            monthText = 'Junho';
            break;
        case 6: 
            monthText = 'Julho';
            break;
        case 7: 
            monthText = 'Agosto';
            break;
        case 8: 
            monthText = 'Setembro';
            break;
        case 9: 
            monthText = 'Outubro';
            break;
        case 10: 
            monthText = 'Novembro';
            break;
        case 11: 
            monthText = 'Dezembro';
            break;
        default:
            dayWeekText = '';
    }
    return monthText;
}

function getData () {
    const spanCompletDate = document.querySelector('.dataCompleta');
    const data = new Date();

    const dayWeek = data.getDay();
    const monthDay = data.getMonth();


    console.log(getDayWeek(dayWeek), getMonth(monthDay));

    spanCompletDate.innerHTML = `${getDayWeek(data.getDay())}, ${data.getDate()}` +
                                ` de ${getMonth(monthDay)} de ${data.getFullYear()}` +
                                ` ${data.getHours()}:${data.getMinutes()}`;
}

getData();

