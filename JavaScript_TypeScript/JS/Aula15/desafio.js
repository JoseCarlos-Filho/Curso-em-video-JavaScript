let numero = Number(prompt('Digite o numero a ser exibido :'));
document.body.innerHTML += `<p>Seu número é: ${numero} </p>`;
document.body.innerHTML += `<p>Raiz quadrada é : ${Math.sqrt(numero)} </p>`;
document.body.innerHTML += `<p>${numero} é inteiro : ${Number.isInteger(numero)} </p>`;
document.body.innerHTML += `<p>${numero} é um NaN : ${Number.isNaN(numero)} </p>`;
document.body.innerHTML += `<p>Arredondando para baixo : ${Math.floor(numero)} </p>`;
document.body.innerHTML += `<p>Arredondando para cima : ${Math.ceil(numero)} </p>`;
document.body.innerHTML += `<p>Com duas casas decimais : ${numero.toFixed(2)} </p>`;