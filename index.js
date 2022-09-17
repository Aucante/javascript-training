let dateActuelle = new Date();

let dateLocale = dateActuelle.toLocaleString('fr-FR', {
  weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
  year: 'numeric', // numeric (xxxx), 2-digit (xx)
  month: 'long', // short, narrow, long, numeric
  day: 'numeric', // numeric, 2-digit
  hour: 'numeric', // ...
  minute: 'numeric',
  second: 'numeric'
});

console.log(dateLocale);