let ville = "avignon"; // On déclare une ville pour que ce ne soit pas vide au démarrage
recevoirTemperature(ville);

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => { // Au clic on demande une ville qu'on stocke
    ville = prompt("Entrez une ville");
    recevoirTemperature(ville); // on envoie la nouvelle ville à la fonction appelée
});

function recevoirTemperature(ville) {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' 
    + ville + '&appid=1ddc336ce648aec5c607b5aa7a31ac66&units=metric'; // url est dans la fonction pour pouvpoir changer la ville !

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let temperature = reponse.main.temp;
                let ville = reponse.name;

                document.querySelector('#temperature_label').innerHTML = temperature;
                document.querySelector('#ville').innerHTML = ville;
            }
        }
        else {
            alert("Un problème est survenu, allez vous faire un café et revenez plsu tard");
        }
    }
}

