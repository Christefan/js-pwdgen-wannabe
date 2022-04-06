// Chiedere all'utente il suo nome
const userFirstName = prompt('Nome');
console.log(userFirstName, typeof(userFirstName));

// Chiedere all'utente il suo cognome
const userLastName = prompt('Cognome');
console.log(userLastName, typeof(userLastName));
// Chiedere all'utente il suo colore preferito
const userColour = prompt('Colore');
console.log(userColour, typeof(userColour));

// ELABORAZIONE
const result = userFirstName + userLastName + userColour + 21;
console.log(result);

const message =`La password generata è : ${result} `;

// OUTPUT
// Mostrare all'utente la password generata
document.getElementById('my-title').innerHTML = message;
