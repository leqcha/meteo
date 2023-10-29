let ville; // On déclare une ville pour que ce ne soit pas vide au démarrage

if ('geolocation' in navigator) {
    navigator.geolocation.watchPosition((position) => {
        const url = 'https://api.openweathermap.org/data/2.5/weather?lon=' 
        + position.coords.longitude + '&lat=' + position.coords.latitude +
        '&appid=1ddc336ce648aec5c607b5aa7a31ac66&units=metric'; // url est dans la fonction pour pouvpoir changer la ville !
        console.log(url);

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
                    let temperatureRessentie = reponse.main.feels_like;
                    let vent = reponse.wind.speed;
                    document.querySelector('#temperature_label').innerHTML = temperature;
                    document.querySelector('#ville').innerHTML = ville;
                    document.querySelector('#temperatureRessentie').innerHTML = temperatureRessentie;
                    document.querySelector('.vent').innerHTML = vent;
                }
            }
            else {
                alert("Un problème est survenu, allez vous faire un café et revenez plsu tard");
            }
        }
    }, erreur, options);
}
else {
    ville = 'Paris';
    recevoirTemperature(ville);

}var options = {
    enableHighAccuracy: true
};



let dateActuelle = new Date();
let dateLocale = dateActuelle.toLocaleString('fr-FR', {
    weekday: "long",
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit'
});

document.querySelector('.date').innerHTML = dateLocale;
document.querySelector('.date').style.color = "yellow";
document.querySelector('.date').style.fontWeight = "bold";

let changerDeVille = document.querySelector('#changer');
changerDeVille.addEventListener('click', () => { // Au clic on demande une ville qu'on stocke
    ville = prompt("Entrez une ville");
    recevoirTemperature(ville); // on envoie la nouvelle ville à la fonction appelée
});

function erreur(){
    ville = "Paris";
    recevoirTemperature(ville);
}

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
                let temperatureRessentie = reponse.main.feels_like;
                let vent = reponse.wind.speed;
                document.querySelector('#temperature_label').innerHTML = temperature;
                document.querySelector('#ville').innerHTML = ville;
                document.querySelector('#temperatureRessentie').innerHTML = temperatureRessentie;
                document.querySelector('.vent').innerHTML = vent;
            }
        }
        else {
            alert("Un problème est survenu, allez vous faire un café et revenez plsu tard");
        }
    }
}

