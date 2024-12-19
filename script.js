
// alle parameters
let article1 = document.querySelector('.halfschaduwplant1')
let popup1 = document.querySelector('.popup1')
let closebttn = document.querySelector('.close')
let textelement = document.querySelectorAll('.textelement article')
let buttons = document.querySelectorAll('.buttons button')


// om de popup te activeren
   article1.addEventListener('click', function(){
      popup1.classList.add('active');
});

   closebttn.addEventListener('click', function() {
// de afsluitknop om de popup af te sluiten
      popup1.classList.remove('active');
   });


// alle textelement articles worden getoond
   function showArticle(articleNumber) {

      // er wordt in de textelement CSS gezegd dat alle textelementen niet getoond worden
      textelement.forEach(article => article.style.display = 'none');

      // de textelement wordt geselecteerd door middel van een id toe te voegn -X
      let selectedArticle = document.querySelector(`#textelement-${articleNumber}`);
      // als de article is geslecteerd wordt die textelement article getoond
      if (selectedArticle) {
         selectedArticle.style.display = 'block';
      }
   }

// er wordt op elke button ene click element toegevoegd
buttons.forEach(button => {
   button.addEventListener('click', () => {
      // deArticlenumber wordt gelinkt aan de data-textelement nummer met het article number
      let articleNumber = button.getAttribute('data-textelement');
      showArticle(articleNumber);
   });
});

// normaal wordt de eerste article getoond
showArticle(1);

   



// in de popup
// let popupbutton1 = document.querySelector('.beschrijving1')
// let voeding1 = document.querySelector('.beschrijving1')
// let temperatuur1 = document.querySelector('.temperatuur1')
