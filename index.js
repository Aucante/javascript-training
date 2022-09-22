const url = 'https://lesoublisdelinfo.com/api.php';

const axiosInstancePost = axios.create({
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  baseURL: 'https://lesoublisdelinfo.com/'
});

axiosInstancePost.post('api.php', new URLSearchParams({
  prenom: 'Steve'
}))
  .then(function(donnees) {
      console.log(donnees.data);
  })
  .catch(function(erreur) {
    console.log(erreur);
  })
