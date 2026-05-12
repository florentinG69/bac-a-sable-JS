
//EXERCICE 1
let titreH1 = document.querySelector("h1")
 
titreH1.setAttribute(
    "style",
    "color: blue; font-size : 50px ; text-align : center"
)


//EXERCICE 2

//je cree variable
let paragraphe1 = document.querySelector("#paragraphe1")
let btnCacher = document.querySelector ("#btnCacher")


//je veux cacher le premier paragraphe
btnCacher.addEventListener("click", function(){
    paragraphe1.classList.toggle("display-none")
}
)

//EXERCICE 3

//je cherche ma div 
let boites = document.querySelectorAll(".boite")

console.log(boites)

//je parcoure mon tableau de boite de div
boites.forEach(boite => {
    boite.addEventListener("click",function(){
        // je reset
        reset()
        //j'ai la div sur laquelle j'ai cliquer
        console.log(boite)
        boite.classList.toggle("bg-red")
    
});

    
});

//role: reset (enleve la classe bg-red a toutes les div qui ont la classe boite)
//parametre : non
//return: non

function reset(){
   let boites = document.querySelectorAll(".boite")
   boites.forEach(boite=>{
    boite.classList.remove("bg-red")

   })
}

//EXERCICE 4
//je cree mes variable
let btnClique = document.querySelector("#btnClique")
let nbrDeClique = 0

//je cree le compteur dans la console
btnClique.addEventListener("click", function(){
    console.log(nbrDeClique+1)
})


