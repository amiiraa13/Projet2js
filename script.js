const prompt = require("prompt-sync")();

let score = 0
let choix = ""
let tableQuestion = ["La boisson préféré de Thomas ? ","La punition la plus bizarre de Thomas plus jeune ? ","Par quoi Thomas se pensait être persécuté ? ","Thomas est français, il n'est donc pas ... "," Thomas peux se tranformer en ... ",]
let tableReponse = [
    [" L'eau "," La biere "," Le coca "," Le vin "],
    [" Puni de télé "," Puni de sucreries "," Puni de lire ", " Puni de canapé ",],
    [" Sa soeur "," Un esprit ", " Les oiseaux "," Le chiffre 33 ", ],
    [" Americain ", " Chinois "," Belge ", " Tétranglais ",],
    [" Poisson "," Serpent ( gentil et méchant) "," Pachyderme "," Paresseux",],
    ]
let bonneReponse = [2, 3, 4, 4, 2]    
  
for (let i = 0; i < tableQuestion.length; i++) {
    console.log(tableQuestion[i])
    for (let j = 0; j < tableReponse[i].length; j++) {
       
        console.log(tableReponse[i][j]);
    }
    
    choix = parseInt(prompt(" Réponse ? "))
     if (bonneReponse[i] == choix)  {
        console.log("Gagné ! ");
        score ++
      } else if(bonneReponse[i] != choix){
        console.log("Perdu ! ");
      }
}
    

    console.log(score);
    
