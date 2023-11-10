'use strict'

// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

// Variabili parole
const parolaUno = (prompt('Scrivi la prima parola'));
const parolaDue = (prompt('Scrivi la seconda parola'));

// Confronto
if (parolaUno.length < parolaDue.length) {
    console.log(parolaUno);
    console.log(parolaDue);
}
else if (parolaUno.length === parolaDue.length) {
    console.log('Le due parole hanno la stessa lunghezza');
}
else {
    console.log(parolaDue);
    console.log(parolaUno);
}