'use strict'

// Il software deve chiedere per 10 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.

let somma = 0;
let count = 10;

for (let i = 1; i <= count; i++) {
    const numeroUtente = Number(prompt(`${i} 'Inserici un numero'`));

    if (!isNaN(numeroUtente)) {
        console.log(`${i} - Hai inserito il numero: ${numeroUtente}`);
        somma += numeroUtente;
        console.log(`${i} La somma a questo punto è: ${somma} `)
    }
    else {
        console.log(`${i} Hai inserito un valore non valido`)
    }

}


console.log(`La somma dei numeri inseriti è: ${somma}`)