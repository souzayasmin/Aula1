const terminal = require('prompt-sync')();

let tamanho = parseFloat(terminal('\nDigite o tamanho da lista: '));
let lista = [];

for (let i = 0; i < tamanho; i++){
    let numeros = parseFloat(terminal('\nDigite o número da lista: '));
    lista.push(numeros);
}
console.log('\nLista:', lista, '\n');