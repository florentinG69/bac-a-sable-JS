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

function verifMail(MailAverif){
    console.log(MailAverif.includs("@"))

}

verifMail("contact@gmail.com")


//EX6
//role: retournera toujours la somme des deux valeurs
//parametre: deux valeur 
//return: additioner

function sommes ( a, b){
    return (a+b);
}

let valeur =(10 + 34);

console.log(valeur)


//EX7
//role : poser une question 
//parametre : une question
//return:
