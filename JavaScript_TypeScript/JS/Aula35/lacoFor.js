// Array de Objetos
const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'},
];

const containerPage = document.querySelector('.container');

for (let index = 0; index <= elementos.length; index++) {
    containerPage.innerHTML = document.appendChild = elementos[index].tag,
    containerPage.innerHTML = document.appendChild = elementos[index].texto;
}



