
function somme(nombre){
    let result;
    if(nombre == 1) {
        return 1;
    }
    return nombre + somme(nombre -1);
}
console.log(somme(4));
