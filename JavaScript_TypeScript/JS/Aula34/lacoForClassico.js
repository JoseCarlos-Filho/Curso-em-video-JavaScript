// for (let i = 0; i <= 10; i++) {
    // console.log(`Linha ${i}`);

    // const parOuImpar = i % 2 === 0;
    // console.log(i, parOuImpar);
    
    // if((i % 2 == 0) ) {
    //     console.log('Par');
    // }else {
    //     console.log('Impar')
    // }

    // resolvendo com operador ternário
    // const parOuImpar = i % 2 === 0 ? 'Par' : 'Impar';
    // console.log(i, parOuImpar);
// }

// Percorrendo um Array utilizando For.

const frutas = ['Abacaxi', 'Abacate', 
                'Amora', 'Caju',
                'Carambola', 'Cacau', 'Goiaba',
                'Graviola', 'Groselha', 'Melancia',
                'Melão', 'Laranja', 'Uva', 'Maracuja',
                'Morango', 'Manga', 'Acerola', 'Limão',
                'Ponkan', 'Perâ' ];

console.log(frutas.length, ': Total de frutas no Array');

// for mais verboso, utilizado para entendimento básico do laço for
for (let index = 0; index < frutas.length; index++) {
    // console.log(frutas[index]);
    console.log(`Índice ${index}`, frutas[index]);
}