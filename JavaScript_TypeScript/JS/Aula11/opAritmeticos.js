/*
* -----> Aritméticos
* -----> + Adição / Concatenação (unir dois valores)
* -----> - Subtração
* -----> / Divisão
* -----> * Multiplicação
* -----> ** Potenciação
* -----> % Resto da divisão
*/

// const num1 = 10;
// const num2 = 5;
// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 / num2);
// console.log(num1 * num2);
// console.log(num1 ** num2);
// console.log(num1 % num2);

// Precedencia aritmética
/*
()
**
* / %
+ -
*/ 
const a = 5;
const b = 2;
const c = 10;
console.log(a + b * c); 
// deve respeitar a precedencia aritmetica
console.log((a + b) * c);

// Incremento e Decremento
// incremento ++
// decremento --
let contador = 1;
contador++;
contador--;
++contador;
--contador;
console.log(contador);

let conta = 2;
conta += 2;
conta += 2;
conta += 2;
console.log(conta);

// NaN - Not a number -
const n1 = 10;
const n2 = 'L5';
console.log(n1 * n2);
console.log(typeof n2);

// converter strings em tipo numerico.
const a1 = 10;
const a2 = parseInt('5'); // converte valor para inteiro.
const a3 = parseFloat('5.2'); // converte valor para casas decimais
const a4 = Number('5');
const a5 = Number('Luiz');
console.log(a1 + a2);
console.log(a1 + a3);
console.log(a1 + a4);
console.log(a1 + a5);