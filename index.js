let taille = prompt('Quel est votre taille en cm?');

taille = taille / 100;

let poids = prompt('Quel est votre poids en kg?');

function getImc(taille, poids) {
    let result = poids / (taille*taille);
    
    return result;
}

alert("Votre IMC est de : " + getImc(taille, poids));