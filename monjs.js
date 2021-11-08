function maFonction(){

var nbsaisie = parseInt(prompt("veuillez saisir un chiffre (zero fait arrêter le programme):"));
var min = nbsaisie;
var max = nbsaisie;
var some = 0;
var compteur = 0;

while(nbsaisie!==0){

    some = some + nbsaisie;

    if(nbsaisie>max){

        min = nbsaisie;
    }
    
    nbsaisie = parseInt(prompt("veuillez saisir un chiffre (zero fait arrêter le programme):"));
    compteur++;

}    

var moyenne = some/compteur;

document.getElementById("msg").innerHTML="<br>Programme terminé!! <br>Le min est: "+min+
                            "<br>Le max est : "+max+" <br>la somme est : "+some+
                            "<br>Vous avez rentrer : "+compteur+
                            "chiffres <br>La valeur moyenne est : "+moyenne;

document.querySelector("button").hidden=true;
document.getElementById("menue").hidden=false;
var titre = document.querySelector("h1");

titre.style.backgroundColor="red";
titre.style.color="yellow";
titre.innerHTML="A bientôt!";

}
