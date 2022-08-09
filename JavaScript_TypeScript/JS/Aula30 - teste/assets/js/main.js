function getData () {
    const data = new Date();

    const diaSemana = data.getDay();
    const dia = data.getDate();
    const mes = data.getMonth() + 1;
    const ano = data.getFullYear();
    const hora = data.getHours();
    const minutos = data.getMinutes();

    return diaSemana, dia, mes, ano, hora, minutos;
}

function getDayWeek (diaSemana) {
    let dayWeekText = '';
    switch (diaSemana) {
        case 0: 
            dayWeekText = 'Domingo';
            break;
        case 1: 
            dayWeekText = 'Domingo';
            break;
        case 2: 
            dayWeekText = 'Domingo';
            break;
        case 3: 
            dayWeekText = 'Domingo';
            break;
        case 4: 
            dayWeekText = 'Domingo';
            break;
        case 5: 
            dayWeekText = 'Domingo';
            break;
        case 6: 
            dayWeekText = 'Domingo';
            break;
        default:
            dayWeekText = '';
    }
    return dayWeekText;
}

function getMonth (mes) {
    let monthText = '';
    switch (mes) {
        case 1: 
            monthText = 'Janeiro';
            break;
        case 2: 
            monthText = 'Fevereiro';
            break;
        case 3: 
            monthText = 'Março';
            break;
        case 4: 
            monthText = 'Abril';
            break;
        case 5: 
            monthText = 'Maio';
            break;
        case 6: 
            monthText = 'Junho';
            break;
        case 7: 
            monthText = 'Julho';
            break;
        case 8: 
            monthText = 'Agosto';
            break;
        case 9: 
            monthText = 'Setembro';
            break;
        case 10: 
            monthText = 'Outubro';
            break;
        case 11: 
            monthText = 'Novembro';
            break;
        case 12: 
            monthText = 'Dezembro';
            break;
        default:
            dayWeekText = '';
    }
    return monthText;
}

function mountInfoDate() {
    const spanDayWeek = document.querySelector('.diaSemana').value;
    const spanDay = document.querySelector('.dia').value;
    const spanMonth = document.querySelector('.mes').value;
    const spanYear = document.querySelector('.ano').value;
    const spanHours = document.querySelector('.hora').value;
    const spanMinutes = document.querySelector('.minutos').value;

    const data = getData();
    const diaSemana = getDayWeek(data.diaSemana);
    const diaMes = getMonth(data.mes);

    spanDayWeek.innerHTML = `${data.diaSemana}, `;
    spanDay.innerHTML = `${data.dia} de`;
    spanMonth.innerHTML = `${diaMes} de`;
    spanYear.innerHTML = `${data.ano}`;
    spanHours.innerHTML = `${data.hora}:`;
    spanMinutes.innerHTML = `${data.minutos}`;

}

mountInfoDate();