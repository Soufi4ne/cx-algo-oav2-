function TriABulle(tableau) {
    
    for (let i = 0 ; i < tableau.length - 1 ; i++) {
        for (let j = 0 ; j < tableau.length - 1 - i ; j++ ) {
            if (tableau[j] > tableau[j+1]) {
                const valeur = tableau[j];
                tableau[j] = tableau[j+1];
                tableau[j+1] = valeur;
            }
        }
    }   

    return tableau;
}

console.log(TriABulle([1,6,7,8,1,25,4,15,3,2,9,17,50,23,55]));