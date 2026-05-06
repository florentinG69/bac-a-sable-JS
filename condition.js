
//EX1
console.log(9 === 10)

//EX2
console.log("Hello" !== "hello")

//EX3
console.log(8 > 12)

// Si b = b -> bien jouer
// sinon -> dommage

/*
let b = 5;
let c = 5;
if(b === c){
    console.log("Bien joué!")
} else{
    console.log("Dommage!")

}

if ( b === c ){
    console.log("C'est pareil")
} else if (b > c){
    console.log("b est superieur à c")
} else{
    console.log("b est inferieur à c")
}



let connect = true;

if(connect === true){
    console.log("l'utilisateur est connecté")
}else {
    console.log("l'utilisateur est deconnecté")
}


//EX4

if(nbr % 2 ===0){
    console.log("nombre pair ! ")
}else{
    console("impair")
}



//EX5

let meteo = "soleil";

if (meteo === "soleil") {
    console.log("Prends une casquette")
} else if (meteo === "pluie") {
    console.log("N'oublie pas ton parapluie")

} else if (meteo === "neige") {
    console.log("Met des bottes")
}

//EX6

let age = 26;

if (age < 12) {
    console.log("enfant");

} else if (age >= 12 && age <= 18) {
    console.log("adolescent")
} else {
    console.log("adulte")
}



//EX7

let a = 28;
let b = 15;
let c = 10;

if (a === b && b === c) {
    console.log("Triangle équilateral")
} else if (a != b && a != c && b != c) {
    console.log("Triangle Quelconque")
} else {
    console.log("Triangle Isocele")
}



//EX8 

//role: determiner si la personne est eligible a une reduction
//parametre : age (number), membre (boolean), achat (string)
//retour: "reduction eccordée" ou "réduction refusée"

function reduction(age, membre, achat) {
    //si la personne a plus de 18 ans : 
    if (age >18){


        //si la personne est membre OU a fait plus de 100 € d'achat
        if(membre === true || achat >100){

            //  reduction accordée
            return "reduction accordée"

        }else{
         //SINON
        //reduction refusée
        return "reduction refusée"
        }
        
       
    }else{
         //SINON
        //reduction refusée
        return "reduction refusée"
        }
        
}

let ticket = reduction(22,true,100)
console.log(ticket)

*/

//EX01 Feu


function FeuTricolor() {
    let ReponseUtilisateur = prompt("Quel couleur est le feu ?")
    if (ReponseUtilisateur == "rouge") {
        console.log("Je m'arrête")
    } else if (ReponseUtilisateur == "orange") {
        console.log("Je freine ! ")
    } else if (ReponseUtilisateur == "vert") {
        console.log("Je Passe !")

    } else {
        console.log("Danger : feu défectueux")
    }
}



//calculer une moyenne genrale 
//role : calculer la moyenen G de l'eleve
//paramtre : les moyennes des différentes matiéres (4)
//return : la moyenne genrale
function calculerMoyenne(noteMath, noteFrancais, noteHistoire, noteSVT){

    let moyenneG = (noteFrancais+noteHistoire+noteMath+noteSVT)/4
    return moyenneG
}

//créer un commentaire 
//role : créer un commentaire en focntion de la moyenne Generale
//parametre : la moyenne G de l'eleve
//return : le commentaire 

function genererCommentaire(moyenneGenerale){

    //si la moyenen generale est inférieur ou égale a 10 -> travailler plus 
    if(moyenneGenerale <=10){
        return "Travaillez plus"
    }

    //sinon si la moyenen genrale est entre 10 et 13 -> poursuivez effort
    else if(moyenneGenerale>10 && moyenneGenerale<=13){
        return "poursuivez vos efforts"
    }

    //sinon si lamoyenne g est entre 13 et 15 -> bon travail 
    else if (moyenneGenerale>13 && moyenneGenerale<=15){
        return "bon travail"
    }

    //sinon si la moyenen g est entre 15 et 17 -> bravo 
    else if(moyenneGenerale>15 && moyenneGenerale<=17){
        return "bravo"
    }

    //sinon -> felicitation
    else{
        return "felicitations"
    }

}

//éditer bulletin
//role : Afficher le bulletin 
//parametre : la moyenen G et le commentaire 
//return : rien car elle affiche 

function afficherBulletin(commentaire, moyenneGenerale, prenomEleve){

    alert(`La moyenne de l'éléve ${prenomEleve} est : ${moyenneGenerale} et le commentaire est : ${commentaire}`)

}

//role : jouer le scenario -> calculermoyenne, commentaire, buleetin
//paramtre : notes
//return : rien

function scenario(a,b,c,d,prenomEleve){
    let moyenneG = calculerMoyenne(a, b, c, d)
    let commentaire = genererCommentaire(moyenneG)
    afficherBulletin(commentaire, moyenneG, prenomEleve)
}

scenario(9,8,7,3,"Marie");
scenario(9,8,7,3,"Paul");
scenario(9,8,7,3,"Jean");