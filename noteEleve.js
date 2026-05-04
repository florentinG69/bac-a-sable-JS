let francais = 14;
let math = 11;
let geo = 17;
let musique = 16;

let moyenne = (francais + math + geo + musique) /4;


console.log(`la moyenne de l'éléve est  ${moyenne}`)

// je crée la fonction
function direBonjour (prenom){
    console.log(`bonjour ${prenom}`)
}

// je lance la fonction
direBonjour("florentin")

//role : additionner 2 chiffre
//parametre : deux chiffre
//return : le resultat

function addition (a , b){
    return a+b;
}

let valeur = addition(2,3);

console.log(valeur)