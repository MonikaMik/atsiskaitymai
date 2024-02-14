/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */
import UserCard from './components/UserCard.js'

const ENDPOINT = 'https://api.github.com/users';

document
    .querySelector('#btn')
    .addEventListener('click', () => {
        document.querySelector('#message').remove();

        fetch(ENDPOINT)
            .then(res => res.json())
            .then(users => {
                users.forEach(user => {
                    const card = new UserCard(user);
                    document.querySelector('#output').appendChild(card);
                });
            })
            .catch((error)=>{ console.log(error) })
    })