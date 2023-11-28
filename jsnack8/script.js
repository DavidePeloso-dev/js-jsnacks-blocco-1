/* Chiedi un numero di 4 cifre all’utente
e calcola la somma di tutte le cifre che compongono il numero. */


let sum = 0

const number = prompt('type a number of 4 digit');
if(number.length > 4){
    alert('you have to type only 4 digit')
}else{
for(let i = 0; i < number.length ; i++){
    const digit = Number(number[i]);
    sum = sum + digit
}}


console.log(sum);