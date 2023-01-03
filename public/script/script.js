// Créer une fonction qui prend deux paramètres, et les additionne, et fait un console.log du résultat.(Additionner)

function sum(A, B){
    return A + B ;
}
let total = sum (10, 25)
console.log(total)



// EXO2
// Créez une fonction qui prend deux paramètres, et soustrait le deuxième au premier, et faites un console.log du résultat.(Soustraction)

function soustraction(A, B){
    return A - B ;
}
let total1 = soustraction (10, 25)
console.log(total1)




// EXO3  
// Créez une fonction qui prend deux paramètres, et les multiplie, et faites un console.log du résultat.(Multiplication)

function product(A, B){
    return A * B ;
}
let total2 = product (10, 25)
console.log(total2)



// EXO4 
// Créez une fonction qui prend deux paramètres, et divise le premier par le deuxième, et faites un console.log du résultat.(Division)

function quot(A, B){
    return A / B ;
}
let total3 = quot (10, 25)
console.log(total3)



// EXO5
// Créez une fonction qui prend deux paramètres, et retourne le reste de la division du premier par le deuxième, et faites un console.log du résultat.(Modulo)

function modulo(A, B){
    return A % B ;
}
let total4 = modulo(10, 25)
console.log(total4)


// EXO6
// Créez une fonction qui prend un paramètre, et retourne le carré de ce nombre, et faites un console.log du résultat.(Racine carrée)

function squareroot(A){
    return (Math.sqrt((A)));
}
let total5 = squareroot(10)
console.log(total5)



// EXO7
// Créez une fonction qui prend deux paramètres, et retourne le premier nombre à l'exposant du deuxième, et faites un console.log du résultat.(Exposant)


function sqt(A, B){
    return ((Math.pow(A, B)));
}
let total6 = sqt(10, 2)
console.log(total6)


// EXO8
// Créer une function [capitalize] qui transforme n'importe quelle chaine de caractères avec la première lettre en majuscule et le reste en minuscule;

// Test
const str = 'flexiple';
const str2 = str.charAt(0);
console.log(str2);



console.log(capitalize("OutIl, OUTIL, ouTiL, oUtIl"));
function capitalize(chaine) {
    return chaine.charAt(0).toUpperCase() + chaine.substring(1).toLowerCase();
}



// Comment ameliorer celui-ci?

/*
function txt(OutIl, OuTIL, ouTiL, oUtIl){
    return (chaine.charAt(0).toUpperCase() + chaine.substring(1).toLowerCase());
}
let total7 = capitalize(OutIl, OuTIL, ouTiL, oUtIl)
console.log(total7)
*/




// EXO9
// Créer une function [calcul] ayant 3 paramètres
// nbr1 , operator , nbr2
// Je dois pouvoir mettre un nombre choisir entre + - * ou / et un second nombre et obtenir une réponse (Utilisez un switch)


function calcul(nbr1, operator, nbr2){
    nbr1 = prompt("Entrez un nombre");
    operator = prompt("Entrez un operateur");
    nbr2 = prompt("Entrez un deuxieme nombre");

    switch (operator) {
        case "+" :
            alert(parseInt(nbr1) + parseInt(nbr2));
            break;

            case "-" :
                alert(parseInt(nbr1) - parseInt(nbr2));
                break;
            
            case "*" :
                alert(parseInt(nbr1) * parseInt(nbr2));
                break;
                
            case "/" :
                alert(parseInt(nbr1) / parseInt(nbr2));
                break;
    
            default:
                alert("Ce n'est pas un operateur")
                break;
      }
}

calcul();
