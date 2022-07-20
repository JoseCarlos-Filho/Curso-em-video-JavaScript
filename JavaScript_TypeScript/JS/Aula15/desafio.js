let numero = prompt('Digite o numero a ser exibido :');
document.body.innerHTML += `Seu número é: ${numero} <br />`;
document.body.innerHTML += `Raiz quadrada é : ${Math.sqrt(numero)} <br />`;
document.body.innerHTML += `${numero} é inteiro : ${Number.isInteger(num1)} <br />`;
document.body.innerHTML += `${numero} é um NaN : ${Number.isNaN(numero)} <br />`;
document.body.innerHTML += `Arredondando para baixo : ${Match.floor(numero)} <br />`;
document.body.innerHTML += `Arredondando para cima : ${Match.ceil(numero)} <br />`;
document.body.innerHTML += `Com duas casas decimais : ${numero.toFixed(2)} <br />`;