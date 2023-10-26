let ville = "avignon";
const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=35e38de93a41566af4e63f3e2e7186d1&units=metric';

function recupererTemperature(){
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function () {
        if (requete.readyState === XMLHttpRequest.DONE){
            if(requete.status === 200){
                let reponse = requete.response;
                console.log(reponse);
                let temperature = reponse.main.temp;
                console.log(temperature);

                document.querySelector('#temperature_label').innerHTML = temperature;
                document.querySelector('#ville').innerHTML = ville;
            }
        }
        else{
            alert ("Un problème est survenu, allez vous faire un café et revenez plsu tard");
        }
    }
}

recupererTemperature();
