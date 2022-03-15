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
console.log(mailAutorizzate)
console.log(mail)

for( i=0; i < mailAutorizzate.length; i++ ){

  if ( mailAutorizzate[i] == mail ){
    document.getElementById("container").innerHTML = "Perfetto, sei autorizzato";
  } else if ( mailAutorizzate[i] != mail ){
    document.getElementById("container").innerHTML = "NON ACCETTIAMO INTRUSI! Inserisci una mail valida!";  
  }

}