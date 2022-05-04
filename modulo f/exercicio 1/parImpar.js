function parImp(n) {

    if (n % 2 == 0) {
        let par = n;
        return(console.log(`O Número par é : ${par} `));
    } else {
        let impar = n;
        return(console.log(`O Número impar é : ${impar}`));
    }
}

parImp(8);
// ou
// console.log(parImp(2));
// ou
// let resposta = parImp(5);
// console.log(resposta);