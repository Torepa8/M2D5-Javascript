/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x,y){
    if(x!==y)
        return x+y
    else 
        return (x+y)*3
}

//let numerinteri=crazySum(8,8)
console.log(crazySum(3,3))

console.log("")




/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary (n){
    let par=true
    if((n===400)||(n>=20&&n<=100))
        return par
    else
        return par=false
}

console.log(boundary(400))


console.log("")


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let parola="salvatore"

function reverseString(str){
    // let arrString=[]
    // //console.log(str.length)
    // for(let i=0;i<str.length;i++){
    //     arrString[i]=str[i]
    // }
    //console.log(arrString)
    // let arraystringhe=str.split("") // metodo per inserire in un array una stringa lettera per lettera
    // console.log(arraystringhe)

    let revArrString=[]
    for(i=str.length;i>=0;i--){
        revArrString.push(str[i])
    }
    let revString=revArrString.join("")
    return revString;
}
console.log("Parola in ordine  " + parola)
let rs = reverseString(parola)
console.log("Paola reverse     " + rs)

console.log("")



/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let word="ciao a tutti sono salvatore"
function upperFirst (upFirst){
    let arrWord=[]
    let arrWordUp=[]
    let stringReturn=""
    arrWord=upFirst.split(" ")
    console.log(arrWord)
    for(i=0;i<arrWord.length;i++){
        let char=arrWord[i].charAt(0)
        let charUp=char.toUpperCase()
        arrWordUp[i]=arrWord[i].replace(char,charUp)
        stringReturn=arrWordUp.join(" ")
    }
    return stringReturn
}

// let inizialiUp=upperFirst(word)
console.log(upperFirst(word))


console.log("")



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */


function giveMeRandom(n){
    let arrDiN=[]
    for(i=0;i<n;i++){        
        let nRandom=Math.floor(Math.random()*10)
        arrDiN[i]=nRandom
    }

    return arrDiN
}

console.log(giveMeRandom(2))
console.log("")


//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function area(l1,l2){
    return l1*l2
}
console.log("Area del rettangolo")
console.log(area(4,5))
console.log("")

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(num){
    let diffAss
    if(num>=19){
        diffAss=num-19
    }else{
        diffAss=19-num
    }

    if(diffAss<19){        
        return diffAss
    }else{
        return (diffAss*3)
    }
}
console.log("Differenza Assoluta tra numero fornito e 19")
console.log(crazyDiff(10))

console.log("")


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function codify(strC){
    if(strC==="code"){
        return strC
    }else{
        return ("code"+strC)
    }
}
console.log(codify("Tore "))

console.log("")


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function check3and7(numint){
    if((numint%3===0)||(numint%7===0))
        return true
    else
        return false
}

console.log("Controllo se il numero è multiplo di 3 o di 7")
console.log(check3and7(44))

console.log("")



/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function cutString(primaUltima){
    let noPrimaUltima=primaUltima.substr(1,(primaUltima.length-2))
    return noPrimaUltima
}
console.log(cutString("Salvatore"))