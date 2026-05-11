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



