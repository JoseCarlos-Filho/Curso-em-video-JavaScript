/* Luiz Otávio Miaranda tem 30 anos, pesa 84kg
   tem 1.8 de altura e seu IMC é de 25.925925925925924
   Nasceu em 1980.
*/

const nome = 'Luiz Otávio';
const sobreNome = 'Miranda';
const idade = 30;
const peso = 84;
const alturaEmM = 1.80;
let indiceMassaCorporal;
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
console.log('indice de massa corporal de ',  nome,  sobreNome, ' é : ', indiceMassaCorporal);

anoNascimento = 2022 - idade;
console.log('ano de nascimento : ' + anoNascimento);

console.log(nome, sobreNome, 'tem', idade, 'anos, pesa', peso, 'kg');
console.log('tem', alturaEmM, 'de altura e seu IMC é de', indiceMassaCorporal);
console.log();

// Template String
console.log(nome + ' ' + sobreNome + ' tem ' + idade + ' anos, pesa ' + peso + ' kg');
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`);
console.log(`${nome} nasceu em ${anoNascimento}`);
