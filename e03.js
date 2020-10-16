var tableau = [1,8,9,17,14,25,3];

function TriParSelection(tableau) {
    var i, j, indexMinimum, valeurMinimum;


for (i=0 ; i<tableau.length ; ++i) {
    valeurMinimum = tableau[indexMinimum = 1];
for(j=i+1 ; j < tableau.length ; ++j) {
    tableau[j] < valeurMinimum && (valeurMinimum = tableau [indexMinimum = j]);
    n = tableau[i] ; tableau[i] = tableau[indexMinimum]; tableau[indexMinimum] = n;
}
}
return tableau;
}
console.log(TriParSelection(tableau));