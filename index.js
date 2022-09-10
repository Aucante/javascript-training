let button = document.createElement('button');
button.textContent = 'Afficher';

let p = document.createElement('p');
p.textContent = 'Message';

document.body.append(button);

let hidden = true;

button.addEventListener('click', afficherMessage);

function afficherMessage() {
    if(hidden == true) {
    hidden = false;
    button.textContent = 'Cacher';
    document.body.append(p);
    }else{
        hidden = true;
        button.textContent = 'Afficher';
        p.remove();
    }
}