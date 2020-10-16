let TriParInsertion = (tableau) => {
    let length = tableau.length;
    for (let i = 1; i < length; i++) {
        let key = tableau[i];
        let j = i - 1;
        while (j >= 0 && tableau[j] > key) {
            tableau[j + 1] = tableau[j];
            j = j - 1;
        }
        tableau[j + 1] = key;
    }
    return tableau;
};

console.log(TriParInsertion([1,5,4,7,9,6,14,2]));