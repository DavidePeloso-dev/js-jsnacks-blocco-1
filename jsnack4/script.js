/* In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa. */

const invited = ['Luca', 'Marco', 'Alfredo', 'Fabio']

const person = prompt('type your first name');


if(invited.includes(person)){
    console.log('you are invited');

} else {
    console.log('you are not invited');
}