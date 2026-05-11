/* for(let i=100; i>0; i=i-2){
    console.log (i)
}
*/
/*
//role: afficher la table de multipiclation d'un nombre quelconque
//parametre: nombre quelconque
//return :

function TableMultiplication(chiffreAMultiplier) {
    for (let i = 1; i <= 10; i++) {
        console.log(`${chiffreAMultiplier} x ${i} = ${chiffreAMultiplier * i}`)
    }
}

/**
 * role : ecrire 50 fois "cnsbd"
 * parametre : non
 * return : non car elle s'affiche
 */

function punition() {
    //crée une boucle qui tournera 50 fois
    for (let i = 1; i <= 50; i++) {
        //ecrit la phrase
        console.log("I will note waste chalk")
    }
}


/**
 * role : crée une boucle pour afficher les lettre une par une d'un mot passé en parametre
 * parametre : un mot
 * return: rien car elle affiche
 */


/*
function epeler(mot) {
    console.log(`le mot ${mot} contient ${mot.length} lettres`)
    //cree une boucle qui epele le mot
    for (let i = 0; i < mot.length; i++) {
        //ecrit le mot
        console.log(mot.charAt(i))
    }
}


// crée un tableau "panierFruit" contenant 6 fruit
//afficher dans la console le premier et le dernier fruit
//" le premier fruit est "
const panierfruit = ["fraise", "abricot", "pêche", "pomme", "banane"]
console.log(`le premier fruit du tableau est ${panierfruit[0]} et le dernier fruit du tableau est ${panierfruit[panierfruit.length - 1]}`)

//ajoute un mot au tableau
panierfruit.push("pastéque")
console.log(panierfruit)


//retire le dernier mot du tableau
panierfruit.pop()
console.log(panierfruit)


//retire le premier mot du tableau
panierfruit.shift()
console.log(panierfruit)

for (let i=0; i<panierfruit.length; i++){
    console.log(panierfruit[i])
}

panierfruit.forEach(fruit => {
    console.log(fruit)
});


//role: calculer la moyenne a partir du tableau de note
//parametre: tableau de notes
//return : la moyenne

//tableau de notes
const notes = [12, 9, 15, 17, 10];

//crée une fonction

function calculerMoyenne(tableauNote) {
    let somme = 0;

    //recuperer les notes une par une dans le tableau
    tableauNote.forEach(note => {
        //quand il en a une il addition dans une variable ( a l'origine une variable vide)
        somme = somme + note;

    });

    //on divise la sommes obtenu par le nombre de valeur dans le tableau c a d la longueur du tableau

    let moyenne = somme / tableauNote.length;

    //retourner le résultat

    return moyenne;

}


//role : afficher le resultat retoruné par la fonction 1
//parametre: du résultat
//return : rien car afficher


function afficherMoyenne (moyenne){
    console.log(`la moyenne de l'élève est : ${moyenne}`)
}

let moyenne = calculerMoyenne (notes)
afficherMoyenne (moyenne)
*/

//EXERCICE PANIER FRUIT

//role : trouver une solution pour compter le nombre de chaque fruit
//parametre: tableau de fruit
//return: rien car ecris

// mon tableau représentant mon panier de fruits 
let fruits = ["cerises", "pommes", "cerises", "pommes", "poires", "bananes",
    "pommes", "poires", "cerises"];





//crée la fonction
function compterFruit(tableaufruits) {

    //compteur de fruit
    let pommes = 0;
    let cerises = 0;
    let poires = 0;
    let bananes = 0;

    //pour chaque fruits
    tableaufruits.forEach(fruits => {
        //si il pioche une pomme il ajoute 1 dans le compteur des pommes
        if (fruits === "pommes") {
            pommes++
            //sinon si il pioche une cerise il ajoute 1 dans le compteur des cerises

        } else if (fruits === "cerise") {
            cerises++
            //sinon si il pioche une poires il ajoute 1 dans le compteur des poires

        } else if (fruits === "poires") {
            poires++

            //sinon il ajoute 1 dans le compteur des bananes
        } else if (fruits === "bananes") {
            bananes++
        }
    })

    return `Dans ce paniers il y a : ${pommes} pommes, ${cerises} cerises, ${poires} poires et ${bananes} bananes`
};



function afficherDansPage(aAfficher) {
    document.querySelector("body").innerHTML += `<p>${aAfficher}</p>`
}

let phraseAafficher = compterFruit(fruits)
afficherDansPage(phraseAafficher)

//EXERCICE CODE CESAR 


//role : encoder un message
//parametre: le mot a encoder
//return : mot chiffre

function codeCesar(motAencoder) {

    //un alphabet
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let motEncode = "";

    //récuperer les lettre du mot une par une 
    for (let i = 0; i < motAencoder.length; i++) {


        let lettreEnCode = "";

        let lettreActuelle = motAencoder.charAt(i)
        console.log(lettreActuelle)

        if (lettreActuelle === "z") {
            lettreEnCode = "a"
        } else {

            //quand il aura recuperer une lettre il va chercher la postion de cette lettre dans l'alphabet -> stock une variable posLettreActuelle
            let posLettreActuelle = alphabet.indexOf(lettreActuelle)
            console.log(posLettreActuelle)
            //va chercher la lettre a la position suivante
            lettreEnCode = alphabet[posLettreActuelle + 1]
            console.log(lettreEnCode)

        }


        //stock dans une variable pour recomposer le mot encoder
        motEncode += lettreEnCode
        console.log(motEncode)

    }


    //retorune le mot encoder
    return motEncode


}


//role : afficher le mot encoder
//parametre : mot encoder
// return: rien car elle affiche

function AfficherDansBody(trucAaffacher) {
    document.querySelector("body").innerHTML += `<p> ${trucAaffacher} </p>`
}

function Scenario(motAencoder) {
    let motEncode = codeCesar(motAencoder)
    AfficherDansBody(motEncode)
}



//EXERCICE JACKPOT

//cree une fonction
//role : choisir 3 emojis
//parametre : tableau avec tout les emojis possible (entre 3 et 5)
//return : les 3 emojis séléctionner

function emojiAlea(tableauEmoji) {

    //crée le tableau  d'émoji

    //tirer 3 chiffre aléatoirement -> Math.floor(Math.random ()*3)

    // attribuer un emoji a chaque chiffre tiré -> si on tire 0 on va chercher l'emoji a la position 0  dans le tableau

    //stocker mes emojis dans une boite -> je recontsruit un tableau avec les emojis piochés

    //retourner  emoji piocher
}

//role : comparer les emojis pour definir si victoire
//parametre : les emojis piochés -> un  tableau
//return : true/false -> boolean

//role: afficher le resultat dans le body
//parametre: emojis pioché, et le resultat
//return : rien car elle affiche