// // L'utilisateur X demande une subvention pour son entreprise :
// // Il est éligible à une réduction de 10% du CA Si :
// // Son revenu de l'année en cours est compris entre 30000 et 60000 annuel
// // Il est éligible à une réduction de 20% du CA Si :
// // Son revenu de l'année en cours est compris entre 20000 et 20999
// // annuel MAIS que le revenu de l'année précédente n'excède pas 50000
// // Il a 5% supplémentaire si l'année en cours est bissextile :)
// // En 2019 il a déclaré 44000 et en 2020 il a déclaré 50000
// // A combien peut-il prétendre en pourcentage ?
// // Quel est le montant de la réduction finale  ?

var anneeEnCours;
var anneePrecedente;
var anneeBi;
var reduction;

if(anneeEnCours >= 30000 && anneeEnCours <= 60000){
    // il est éligible aux 10%
    reduction = 10;
} else if(anneeEnCours >= 20000 && anneeEnCours <= 20999 && anneePrecedente <= 50000){
    //il est éligible au 20%
    reduction = 20;
} 
//si c'est une année bissexctile
if (anneeEnCours % 4 == 0 && anneeEnCours % 100 == 0 || anneeEnCours % 200 == 0){
    //il est éligible au 5%
    reduction = reduction + 5;
}

console.log('Lutilisateur x obtient ' ,reduction + '% de reduction, alors' + (anneeEnCours/100) +' euros.');

//  a l'aide d'une boucle vous devez afficher les chiffres
//  paires de facon croissantes jusqu'a 100.
//  et les chiffre impaire de facon decroissante jusqua 100

