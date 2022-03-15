let mailAutorizzate = [ 
    "davide@gmail.com",
    "miriam@gmail.com",
    "francesco@gmail.com",
    "mariella@gmail.com",
    "luigi@gmail.com",
    "elisa@gmail.com",
    "marco@gmail.com",
    "alberto@gmail.com",
    "mario@gmail.com"    
];

let mail = prompt("Inserisci e verifica la tua mail");

let mailTrovata = false

for( let i=0; i < mailAutorizzate.length; i++ ){
  if  ( mailAutorizzate[i] == mail ) {
    mailTrovata = true
  }
}

if ( mailTrovata == true ){
  document.getElementById("container").innerHTML = "Perfetto, sei autorizzato!";
} else {
  document.getElementById("container").innerHTML = "NON ACCETTIAMO INTRUSI! Inserisci una mail valida!";  
}