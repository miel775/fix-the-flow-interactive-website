let buttons = document.querySelectorAll('button'); // Stap 1: Selecteer alle buttons

// hier wordt er een klikfunctie toegevoegd op alle buttons
buttons.forEach(button => {
  button.addEventListener('click', function () {
    // Alle planten worden geselecteerd
    let articles = document.querySelectorAll('.schaduwplant');

    // de artikelen worden toegevoegd met de klasse schaduwplant
    articles.forEach(article => {
    // er is een specifieke active klasse gemaakt van alle soorten planten
      article.classList.add('active');
    });
  });
});