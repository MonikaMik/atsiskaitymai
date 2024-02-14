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
        const messageElement = document.querySelector('#message');
        messageElement && messageElement.remove();

        const outputElement = document.querySelector('#output');
        outputElement.innerHTML = "";

        fetch(ENDPOINT)
            .then(res => {
                if (!res.ok) {
                    throw new Error(`HTTP error status: ${res.status}`);
                }
                return res.json();
            })
            .then(users => {
                if (users.length === 0) {
                    const noDataMessage = document.createElement('p');
                    noDataMessage.textContent = 'No users found.';
                    outputElement.appendChild(noDataMessage);
                } else {
                    users.forEach(user => {
                        const card = new UserCard(user);
                        outputElement.appendChild(card);
                    });
                }
            })
            .catch(error => {
                const errorMessage = document.createElement('p');
                errorMessage.textContent = `Failed to fetch users. ${error.message}`;
                outputElement.appendChild(errorMessage);
            })
    })