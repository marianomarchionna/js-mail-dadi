// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numUtente = Math.floor(Math.random() * 6)+1;
var numComputer = Math.floor(Math.random() * 6)+1;

document.getElementById('my_number').innerHTML = "Il tuo numero, generato casualmente è " + numUtente + ". Mentre il numero generato casualmente per il PC è " + numComputer + ".";

if (numUtente > numComputer)
    document.getElementById('my_result').innerHTML = "Complimenti, hai vinto questa mano. Se vuoi provare a vincere ancora ricarica la pagina!";
else if (numUtente < numComputer)
    document.getElementById('my_result').innerHTML = "Mi dispiace, hai perso questa mano. Se vuoi provare a vincere ricarica la pagina!";
else 
    document.getElementById('my_result').innerHTML = "Non c'è nessun vincitore, il vostro punteggio è identico. Se vuoi provare a vincere ricarica la pagina!";