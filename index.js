const url = 'https://blockchain.info/ticker';

function recupPrix() {
    let requete = new XMLHttpRequest();
    requete.open('GET', url);
    requete.responseType = 'json';
    requete.send();

    requete.onload = function() {
        if (requete.readyState === XMLHttpRequest.DONE) {
            if (requete.status === 200) {
                let reponse = requete.response;
                let prixEuros = reponse.EUR.last;
                document.querySelector('#price_label').textContent = prixEuros;
            }
            else
            {
                alert("problème");
            }
        }
    }
    console.log('Prix actualisé');
}

setInterval(recupPrix, 1000);

