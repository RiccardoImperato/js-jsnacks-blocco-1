'use strict'

const arrayVuoto = [];
let somma = 0;
let numeroUtente = 0;
let i = 0;

while (somma < 50) {
    let numeroUtente = +prompt('insrisci un numero');
    arrayVuoto.push(numeroUtente);
    if (!isNaN(numeroUtente)) {
        console.log(`${i} - Hai inserito il numero: ${numeroUtente}`);
        somma += numeroUtente;
        console.log(`${i} La somma a questo punto è: ${somma} `)
    }
    else {
        console.log(`${i} Hai inserito un valore non valido`)
    }
    console.log(numeroUtente);
    console.log(arrayVuoto.length);
    i++;
}