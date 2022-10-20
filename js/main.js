let kilometers = Number(window.prompt('la distanza del tuo viaggio in kilometri?'));
let userAge = Number(window.prompt('quanti anni hai?'));
let ticketPrice = kilometers * 0.21; // il prezzo base è 0.21€ al kilometro
let discountName = `spiacenti non è stato applicato nessuno sconto`;
// se l'utente ha meno di 18 anni c'è lo sconto del 20%
if (userAge < 18) {
   ticketPrice -= ticketPrice * 0.2;
   discountName = `è stato applicato lo sconto minorenni`;
}
// se l'utente è un vecchio over 65 (65compreso) c'è lo sconto del 40%
else if (userAge >= 65) {
   ticketPrice -= ticketPrice * 0.4;
   discountName = `è stato applicato lo sconto anziani`;
}
// arrontondo a due decimali
document.getElementById('final-price').innerHTML = `il bigletto costa €
${ticketPrice.toLocaleString('en-US', { maximumFractionDigits: 2, minimumFractionDigits: 2 })} ${discountName}`;
