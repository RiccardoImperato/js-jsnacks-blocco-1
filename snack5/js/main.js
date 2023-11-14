// Fai inserire un numero, che chiameremo N, all’utente.
// Genera N array, ognuno formato da 10 numeri casuali tra 1 e 100. Ogni volta che ne crei uno, stampalo a schermo.

'use strict'

const userInput = Number(prompt('Inserisci un numero'));
const randomNumber = 10;

for (let i = 1; i <= userInput; i++) {
    const arrayResult = [];

    for (let j = 0; j < randomNumber; j++) {
        let random = Math.floor(Math.random() * 100) + 1;
        arrayResult.push(random);
    }
    alert(`Array ${i}: ${arrayResult}`);
    console.log(`Array ${i}: ${arrayResult}`);
}