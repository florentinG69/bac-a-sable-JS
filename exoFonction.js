//EX1

//role : calculer la moyenne
//parametre : 4 notes ( math, français, chimie et italien)
//return: le moyenne

function calculMoyenne (a, b, c, d){
    return (a+b+c+d)/4
}

console.log(`La moyenne de l'élève est de ${calculMoyenne(12, 13, 18, 15)}`)


//EX2


//role: décremente -> retirer une pomme au stock
//parametre: 
//return: 

let stock = 6;
console.log(stock)

function decremente(){
    stock --; 
}

decremente()
console.log(stock)


//EX3
//role : affiche la derniere lettre
//parametre : un mot
//return:





//EX4
//role : remplacer "bubble tea" par un nouveau produit
//paramettre : nouveau produit et la liste initial "thé, café, tisane, bobble tea"
//return : rien

function nouvelleOffre (nouveauProduit, listeInitial){
    console.log(listeInitial.replace("bubble tea", nouveauProduit))

}

nouvelleOffre("matcha", "café, bubble tea, tisane")


//role: Afficher des balises a ma page html
//parametre: balise a ajouter
//return

function ajouterBalise(balise){
    document.querySelector("body").innerHTML+=balise
}
ajouterBalise("<h1>Coucou</h1>")
ajouterBalise("<p>on est vraiment trop fort en js </p>")
ajouterBalise("<h2>Comment ça va</h2>")

//role: afficher l'addition de deux chiffre
//parametre : les chiffres a additionner
//return: rien

function afficherAddition (a, b){
    ajouterBalise (`<p> ${a+b} </p>`)
}

afficherAddition(7,5)



//role : afficher le prenom dans le body
//parametre : prenom
//return:

function afficherPrenom(Prenom){
    ajouterBalise(`<p>Salut ${Prenom}, salut ça va ?</p>`)
}
afficherPrenom("David")

//EX5
//role: afficher si l'adress mail contien un @ ou non
//parametre: une adresse mail à verifier
//return: rien car elle affiche



//EX6
//role: retournera toujours la somme des deux valeurs
//parametre: deux valeur 
//return: additioner

function addition ( a, b){
    return (a+b);
}

let resultat =addition(10 , 34);

console.log(resultat)

/*
//EX7
//role : poser une question 
//parametre : une question
//return: réponse

function poseQuestion(question){
  let rep = prompt(question)
  return rep
  
}

let reponse = poseQuestion("Quel jour sommes nous ?")

console.log(reponse)

*/
/*
//EX8
//role : convertir un prix en $
//paramettre : le prix en € et le taux de change
//return: le prix converti

function convertion (prix, taux){

    return prix * taux;    
}

let resultatDol = convertion(3, 1.17)

console.log(`le prix converti est de ${resultatDol} dollar`)

*/
/*
//role : demander un prix et un taux e change à l'utilisateur et convertit le prix
//parametre : 
//return : prix converti

function convertisseur(){

    //demande le prix converti
   let prix = parseFloat(prompt("Quel prix veux-tu convertir?"))

    //demadne le taux
    let taux = parseFloat(prompt ("à quel taux"))

    // convertit
    return prix * taux

    //retourne le resultat

}
let prixConverti = convertisseur()

alert(`Le prix converti est de ${prixConverti}`)

*/
//role : calculer la moyenne de l'eleve a partir de 4 notes donner par l'utilisateur
//parametre:
//return : la moyenne de l'eleve

function MoyenneGen (){
    let noteMath = parseFloat(prompt("Quel est la moyenne en Math ?"))
    let noteFr = parseFloat(prompt("Quel est la moyenne en Français ?"))
    let noteHistoire = parseFloat(prompt("Quel est la moyenne en Histoire ?"))
    let noteSvt = parseFloat(prompt("Quel est la moyenne en SVT ?"))

    return (noteMath + noteFr + noteHistoire + noteSvt) /4;
}

let MoyenneCal = MoyenneGen()

alert(`La moyenne de l'élève est de ${MoyenneCal}`)