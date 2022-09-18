let ville = "Paris";
recevoirTemperature(ville);

let changerVille = document.querySelector('#changer').addEventListener('click', () => {
    ville = prompt('Quelle ville souhaitez vous?');
    recevoirTemperature(ville);
});

function recevoirTemperature(ville) {

    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + ville + '&appid=dc8c9152e8adaad0ec8bf635818c0d42&units=metric';

    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send('prenom=John');
    
    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                document.querySelector('#temperature_label').textContent = reponse.main.temp;
                document.querySelector('#ville').textContent = reponse.name;
            }
            else
            {
                alert('problème');
            }
        }
    }
}

