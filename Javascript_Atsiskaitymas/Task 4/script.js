/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
    .then(res => res.json())
    .then(cars => {
        const outputDiv = document.querySelector('#output');

        if(cars.length === 0) {
            const noCarsFound = document.createElement('p');
            noCarsFound.textContent = "No cars found.";
            outputDiv.appendChild(noCarsFound);
        } else {
            cars.forEach(car => {
                const card = document.createElement('div');
                card.classList.add('card');
                
                const brandTitle = document.createElement('h2');
                brandTitle.textContent = car.brand;
                
                const modelsList = document.createElement('ul');
                car.models.forEach(model => {
                    const modelItem = document.createElement('li');
                    modelItem.textContent = model;
                    modelsList.appendChild(modelItem);
                });
                card.append(brandTitle, modelsList);
                
                outputDiv.appendChild(card);
        })
        }
    })
    .catch(error => {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = `Failed to fetch. Error: ${error.message}`;
        document.querySelector('#output').appendChild(errorMessage);
    })