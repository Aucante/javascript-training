const url = 'https://lesoublisdelinfo.com/api.php';


async function envoyerPrenom(prenom) {
  const requete = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      prenom: prenom
    })
  });
  
  if(!requete.ok) {
    alert('Un problème est survenu.');
  } else {
    let donnees = await requete.json();
    console.log(donnees);
  }
}

envoyerPrenom('elon');