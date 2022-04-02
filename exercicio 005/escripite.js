// pega a primeira tag no caso p por ter mais de uma.
var p1 = window.document.getElementsByTagName('p')[0]
// variável que pega o corpo da page no caso o body
var corpo = window.document.body
// exibi o conteudo da tag p
window.document.write(p1.innerText)

// Muda a cor da tag body e muda a cor da tag p
corpo.style.background = 'black'
p1.style.color = 'blue'

var p2 = window.document.getElementsByTagName('p')[1]

// Pegando elemento de um ID
// var identificadorId = window.document.getElementById('content')
// identificadorId.style.background = 'green'
// identificadorId.innerText = 'Estou aguardando....'
// window.document.getElementById('content').innerText = 'Ola!!!'


var identificadorId = window.document.querySelector('div#content')
identificadorId.style.background = 'blue'

var identificadorClass = window.document.querySelector('div.outro')
identificadorClass.style.background = 'red'


