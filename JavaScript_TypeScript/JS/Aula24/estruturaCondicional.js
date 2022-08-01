// If pode ser usado sozinho
// Sempre que utilizo a palavra else, preciso de um if antes de
// Eu posso ter vários else ifs na checagem
// Podemos usar condições  sem else if, utilizando apenas if e else


const data = new Date();
const hora = data.getHours();
console.log(hora);

if(hora >= 0 && hora <= 6) {
    console.log('Boa Madrugada');
} else if(hora >= 7 && hora <= 11){
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 17) {
    console.log('Boa tarde')
} else if ( hora > 18 && hora < 23) {
    console.log('Boa Noite');
}


const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não vou sair de casa');
}