/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio konvertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: atvaizdavimas turi būti matomas pateikus formą ir pateikiamas
<div id="output"></div> viduje, bei turi turėti bent minimalų stilių;
------------------------------------------------------------------- */
document
    .querySelector('.wrapper > form')
    .addEventListener('submit', e => {
        e.preventDefault();

        const kilosInput = parseFloat(e.target.elements.search.value);
        
        const resultDiv = document.querySelector('#output');
        resultDiv.innerHTML = '';

        if (isNaN(kilosInput) || kilosInput < 0) {
            resultDiv.innerHTML = 'Please enter a valid number.';
        } else {
            let pounds = kilosInput * 2.2046; 
            let grams = kilosInput * 1000;
            let ounces = kilosInput * 35.274;
    
            const weightToLb = document.createElement('p');
            weightToLb.textContent = `Pounds: ${pounds.toFixed(2)}lb`;
    
            const weightToG = document.createElement('p');
            weightToG.textContent = `Grams: ${grams.toFixed(2)}g`;
    
            const weightToOz = document.createElement('p');
            weightToOz.textContent = `Ounces: ${ounces.toFixed(2)}oz`;
    
            resultDiv.append(weightToLb, weightToG, weightToOz);
        }  
    })
    
