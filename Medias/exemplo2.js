const terminal = require('prompt-sync')();

let nota = parseFloat(terminal('\nDigite uma nota: '));

if(nota => 0 && nota <= 4){
    console.log('\nReprovado\n');
} else if(nota => 4 && nota <= 5){
    console.log('\nRecuperção\n');
} else if(nota => 6 && nota <= 10){
    console.log('\nAprovado\n');
}