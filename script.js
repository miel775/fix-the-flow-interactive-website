// knop om alle schaduw planten te zien
let schaduw = document.querySelector(".schaduw");
// knop om alle halfschaduw planten te zien
let halfschaduw = document.querySelector(".halfschaduw");
// knop om alle zonplanten te zien
let zon = document.querySelector(".zon");

// parameters
let eerstePagina  = 1
let plantenperpagina = 10

schaduw.addEventListener("click", function () {
    // alle planten zijn hier geselecteerd
    let allePlanten = document.querySelectorAll(".tables#1");

    // functie array voor planten
    allePlanten = Array.from(allePlanten);

    // eerste pagina
    toonPagina(allePlanten, eerstePagina, plantenPerPagina);
});

// functie om planten per pagina te laten zien
function toonPagina(planten, pagina, perPagina) {
    let startIndex = (pagina - 1) * perPagina;
    let eindIndex = startIndex + perPagina;

//  filter planten op huidige pagina
let plantenOpPagina = planten.slice(startIndex, eindIndex);

 let plantenLijst = document.querySelector(".tables");
 plantenLijst.innerHTML = "";


// huidige pagina planten toegevoegd
plantenOpPagina.forEach((plant) => {
    plantenLijst.appendChild(plant);
});

genereerPaging(planten, perPagina);
}

// paginatie
function genereerPaging(planten, perPagina) {
    let totaalPaginas = Math.ceil(planten.length / perPagina);
    let pagingDiv = document.querySelector(".paging");
    pagingDiv.innerHTML = "";;
}
// maak een knop voor paging
for (let i = 1; i <= totaalPaginas; i++) {
    let knop = document.createElement("button");
    knop.textContent = i;

    

    knop.addEventListener("click", function () {
        eerstePagina = i;
        toonPagina(planten, eerstePagina, perPagina);
    });

    pagingDiv.appendChild(knop);
}



