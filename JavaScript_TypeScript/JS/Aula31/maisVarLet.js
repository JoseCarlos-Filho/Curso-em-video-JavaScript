const verdadeiro = true;

let nome1 = 'José'; // criando
var nome2 = 'Carlos'; // criando

if (verdadeiro) {
       let nome1 = 'Otavio'; // criando
       var nome2 = 'Rogério'; // redeclarando
       console.log(nome1, nome2);
       if (verdadeiro) {
              var nome2 = 'Pedro'; // redeclarando
              let nome1 = 'Qualquer coisa';
              console.log(nome1, nome2);
       }
}

