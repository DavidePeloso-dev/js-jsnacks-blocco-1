/* Crea un array vuoto.
Chiedi per 6 volte all’utente di inserire un numero,
se è dispari inseriscilo nell’array. */


const odd = [];

for(let i = 0; i < 6; i++){
    const number = Number(prompt('type a number'))

    if(number % 2 != 0){
        odd.push(number)
    }
}
console.log(odd);