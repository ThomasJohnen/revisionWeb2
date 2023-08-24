var clics = 0;

window.addEventListener('click', () => {
    clics++;
    if (clics >= 5 && clics <= 9) {
        this.document.querySelector('#msg').textContent = 'Bravo, bel échauffement !';
    } else if (clics >= 10) {
        this.document.querySelector('#msg').textContent = 'Vous êtes passé maître en l\'art du clic ! ';
    } else {
        this.document.querySelector('#msg').textContent = 'Clic n°' + clics;
    }
});