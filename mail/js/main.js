// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var listaMail = ["paolo@gmail.com", "luca@libero.it", "marco@outlook.com", "pippo@yahoo.com"];

var mail = prompt('Inserisci la tua mail: ');

var verifica=false;

for (var i=0; i < listaMail.length; i++) {
    if(mail==listaMail[i]) 
        verifica=true;
}

if (verifica==true){
    document.getElementById('my_mail').innerHTML = "Autenticazione effettuata. La mail: " + mail + " è presente nel nostro database";
} else {
    document.getElementById('my_mail').innerHTML = "Autenticazione non riuscita. La mail " + mail + " non è presente nel nostro database.";
}