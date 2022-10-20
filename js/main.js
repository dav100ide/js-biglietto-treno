let kilometers = Number(window.prompt('la distanza del tuo viaggio in kilometri?'));
let userAge = Number(window.prompt('quanti anni hai?'));
let ticketPrice = kilometers * 0.21; // il prezzo base è 0.21€ al kilometro

// se l'utente ha meno di 18 anni c'è lo sconto del 20%
if (userAge < 18) {
   ticketPrice -= ticketPrice * 0.2;
   console.log(ticketPrice);
}
// se l'utente è un vecchio over 65 (65compreso) c'è lo sconto del 40%
else if (userAge >= 65) {
   ticketPrice -= ticketPrice * 0.4;
   console.log(`prezzo anziano ${ticketPrice}`);
}

document.getElementById('final-price').innerHTML = `il bigletto costa €${ticketPrice}`;
