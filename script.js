
// let buttons = document.querySelectorAll('button'); // Stap 1: Selecteer alle buttons

// // hier wordt er een klikfunctie toegevoegd op alle buttons
// buttons.forEach(button => {
//   button.addEventListener('click', function () {
//     // Alle planten worden geselecteerd
//     let articles = document.querySelectorAll('.schaduwplant');
//     let halfschaduw = document.querySelectorAll('.halfschaduwplant');
//     let zon = document.querySelectorAll('.zonplant');
    
//     // de artikelen worden toegevoegd met de klasse schaduwplant
//     articles.forEach(article => {
//     // er is een specifieke active klasse gemaakt van alle soorten planten
//       article.classList.add('active');
//     });

//     halfschaduw.forEach(halfschaduwp => {
//       // er is een specifieke active klasse gemaakt van alle soorten planten
//         article.classList.remove('active');
//       });
//   });
// });  
// alle buttons

let article1 = document.querySelector('.halfschaduwplant1')
let popup1 = document.querySelector('.popup1')
let closebttn = document.querySelector('.close')
// alle parameters

// om de popup te activeren
   article1.addEventListener('click', function(){
      popup1.classList.add('active');
});

   closebttn.addEventListener('click', function() {
// de afsluitknop om de popup af te sluiten
      popup1.classList.remove('active');
   });

   



// in de popup
// let popupbutton1 = document.querySelector('.beschrijving1')
// let voeding1 = document.querySelector('.beschrijving1')
// let temperatuur1 = document.querySelector('.temperatuur1')
