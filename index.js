function addition(...nombres) {

  let resultat = 0;

  nombres.forEach(nombre => {
      resultat += nombre;
  });

  console.log(resultat);

}

addition(4, 9, 78, 54, 5);