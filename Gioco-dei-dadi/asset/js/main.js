let numPlayer = Math.floor(Math.random() * 6) + 1
console.log("numero player  " + numPlayer)

let numComputer = Math.floor(Math.random() * 6) + 1
console.log("numero computer  " + numComputer)

if ( numPlayer > numComputer ){
    document.getElementById("risultato").innerHTML = "Sei stato fortunato! Hai battuto il computer."
}
else if ( numPlayer == numComputer ){
    document.getElementById("risultato").innerHTML = "Pareggio! Ricarica la pagina per decretare un vincitore."
}
else {
    document.getElementById("risultato").innerHTML = "Ritenta, sarai più fortunato.."
}