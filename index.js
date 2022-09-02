let monTableauAssociatif = {
    'prenom'    : 'Mark',
    'nom'       : 'Zuckerberg',
    'poste'     : 'PDG de Facebook'
};

function concatener(tableau) {
    let chaine = '';

    for (const valeur in tableau) {
        
        chaine += (valeur + ' : ' + tableau[valeur] + '\n');

    }

    console.log(chaine);
}

concatener(monTableauAssociatif);