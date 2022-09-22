const url = 'https://blockchain.info/ticker';


async function recupererPrix() {
  axios.get(url)
    .then(function(donnees) {
      // console.log(donnees);
      document.querySelector('span').textContent = donnees.data.EUR.last;
    })
    .catch(function(erreur) {
      console.log(erreur);
    });
}

recupererPrix();
