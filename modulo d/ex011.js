var idade = 50;
console.log(`Sua idade é : ${idade} anos`);
if (idade < 16) {
    console.log('Você não vota!!!')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opicional!!!')
} else {
    console.log('Voto Obrigatório!!!')
}