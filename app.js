// import functions and grab DOM elements
import data from './data/pokemon.js';
import { capturePokemon, showPokemon } from './storage-utils.js';

const pokemon1 = document.getElementById('pokemon-1');
const pokemon2 = document.getElementById('pokemon-2');
const pokemon3 = document.getElementById('pokemon-3');
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');
const button = document.getElementById('submit-btn');


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