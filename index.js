// Call et Apply permettent d'invoquer immédiatement une fonction
// Animal.call(this (l'objet en cours), nombreDePattes, poids)

// Call = Apply
var gandalf = { titre: "Magicien" };
function direBonjour() {
  console.log("Bonjour " + this.titre);
}
// direBonjour.call(gandalf);

// Apply != Call
var gandalf = { titre: "Magicien" };
// let arme = ['un bâton', 75];

function direBonjour(arme, degats) {
  console.log("Bonjour " + this.titre + ", vous possédez " + arme + " qui donne " + degats + " points de dégats.");
}

this.valeur = "Window";

let monObjet = {
  valeur: "Objet",
  getValeur: function() {
    console.log(this.valeur);
  }
}
