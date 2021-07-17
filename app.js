// import functions and grab DOM elements
import data from './data/pokemon.js';
import { capturePokemon, findById, getPokedex, showPokemon } from './storage-utils.js';

const pokemon1 = document.getElementById('pokemon-1');
const pokemon2 = document.getElementById('pokemon-2');
const pokemon3 = document.getElementById('pokemon-3');
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');
const button = document.getElementById('submit-btn');
const shown1 = document.getElementById('shown1');
const shown2 = document.getElementById('shown2');
const shown3 = document.getElementById('shown3');
const prefered1 = document.getElementById('prefered1');
const prefered2 = document.getElementById('prefered2');
const prefered3 = document.getElementById('prefered3');



let totalPlays = 0;

function renderRandomPokemon() {
    totalPlays++;
    let randomNum1 = Math.floor(Math.random() * data.length);
    let randomNum2 = Math.floor(Math.random() * data.length);
    let randomNum3 = Math.floor(Math.random() * data.length);

    while (randomNum1 === randomNum2 || randomNum3 === randomNum2 || randomNum3 === randomNum1) {   
        randomNum1 = Math.floor(Math.random() * data.length);
        randomNum2 = Math.floor(Math.random() * data.length);
        randomNum3 = Math.floor(Math.random() * data.length);
    } 
    
    let randomPokemon1 = data[randomNum1];
    let randomPokemon2 = data[randomNum2];
    let randomPokemon3 = data[randomNum3];
    
    pokemon1.value = randomPokemon1.id;
    showPokemon(pokemon1.value);
    pokemon2.value = randomPokemon2.id;
    showPokemon(pokemon2.value);
    pokemon3.value = randomPokemon3.id;
    showPokemon(pokemon3.value);

    let results = getPokedex();

    let result1 = findById(results, String(randomPokemon1.id));
    shown1.textContent = `Shown: ${result1.shown}`;
    prefered1.textContent = `Preferred: ${result1.preferred}`;

    let result2 = findById(results, String(randomPokemon1.id));
    shown2.textContent = `Shown: ${result2.shown}`;
    prefered2.textContent = `Preferred: ${result2.preferred}`;

    let result3 = findById(results, String(randomPokemon1.id));
    shown3.textContent = `Shown: ${result3.shown}`;
    prefered3.textContent = `Preferred: ${result3.preferred}`;

    image1.src = randomPokemon1.url_image;
    image2.src = randomPokemon2.url_image;
    image3.src = randomPokemon3.url_image;

}

renderRandomPokemon();

button.addEventListener('click', ()=>{
    if (totalPlays < 10) {
        renderRandomPokemon();
        const preferred = document.querySelector('input[type=radio]:checked');
        const numberify = preferred.value;
        capturePokemon(numberify);
    } else {
        window.location.replace('./results');
    }
});