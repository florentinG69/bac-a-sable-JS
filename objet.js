
/*
let promo11 = [

    {
        prenom: "alexis",
        age: 19,
        ville: "St Etienne",
        job: "gagner de l'argent"
    },
    {
        prenom: "Romain",
        age: 27,
        ville: "St Etienne",
        job: "data scientist"
    },
    {
        prenom: "Ludivine",
        age: 29,
        ville: "St Etienne",
        job: "formatrice"
    },
    {
        prenom: "Nico",
        age: 42,
        ville: "St Etienne",
        job: "eleveur de poulet"
    },
]

function ficheEleveDansDom(tableauPomo11) {

    //prendre les eleves un par un
    tableauPomo11.forEach(eleve => {

        //apeller ma fonction dans le role est d'envoyer dans le dom
        ajouterAuBody(`

            <div class="bg-blue text-white mb-50 txt-align">
              <h2>${eleve.prenom}</h2>
              <p>${eleve.age}</p>
              <p>${eleve.ville}</p>
              <p>${eleve.job}</p>
            
            </div>
        
        `)


    });

}



function ajouterAuBody(trucAafficher) {
    document.querySelector("body").innerHTML += trucAafficher

}

ficheEleveDansDOM(promo11)

*/

let recette = {
    nom: "poulet rôti au thym et à l'ail",
    difficulte: "Facile",
    tempPreparation: "15 min",
    tempCuisson: "1h 15 min",
    nbrPortions: 6,
    ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
}

console.log(`
    La recette du ${recette.nom}
    Difficulté : ${recette.difficulte}
    Temps de préparation : ${recette.tempPreparation}
    Temps de cuisson : ${recette.tempCuisson}
    Pour ${recette.nbrPortions}
    Liste des ingrédients : ${recette.ingredients}
`)


let recettes = [
    {
        nom: "poulet rôti au thym et à l'ail",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "1h 15 min",
        nbrPortions: 6,
        ingredients: ["huile d'olive", "beurre fondu", "feuilles de thym", "sel", "poivre", "ail"]
    },
    {
        nom: "spaghetti à la bolognaise",
        difficulte: "Moyenne",
        tempPreparation: "20 min",
        tempCuisson: "40 min",
        nbrPortions: 4,
        ingredients: ["spaghetti", "viande hachée", "oignon", "carotte", "tomate concassée", "ail", "huile d'olive", "sel", "poivre"]
    },
    {
        nom: "salade César",
        difficulte: "Facile",
        tempPreparation: "15 min",
        tempCuisson: "0 min",
        nbrPortions: 2,
        ingredients: ["laitue romaine", "croûtons", "parmesan râpé", "filet de poulet", "sauce César", "sel", "poivre"]
    }
];

//role : récuperer les recettes une par une pour les afficher
//parametre : tableau des recette
//return : rien
function ficheRecette(recettes) {
    //recuperer des recette une par une

    recettes.forEach(recette => {
        recette.ingredients.forEach(ingredient => {

            ingredientsListe += `<li> ${ingredient}</li>`
            console.log(ingredientsListe)
        })

        //quand il en tiens une il l'affiche
        ajouterAuBody(`
            <div>
                <h2>La recette du ${recette.nom}</h2>
                <p>Difficulté : ${recette.difficulte}</p>
                <p>Temps de préparation : ${recette.tempPreparation}</p>
                <p>Temps de cuisson : ${recette.tempCuisson}</p>
                <p>Pour ${recette.nbrPortions}</p>
                <p>Liste des ingrédients :</p> 
                <ul>
                ${recette.ingredients}
                </ul>  
            </div>

            `)

    })

};



function ajouterAuBody(trucAafficher) {
    document.querySelector("body").innerHTML += trucAafficher

}





