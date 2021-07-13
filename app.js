// import functions and grab DOM elements
import data from '../data/pokemon.js';

const pokemon1 = document.getElementById('pokemon-1');
const pokemon2 = document.getElementById('pokemon-2');
const pokemon3 = document.getElementById('pokemon-3');
const image1 = document.getElementById('img-1');
const image2 = document.getElementById('img-2');
const image3 = document.getElementById('img-3');
const button = document.getElementById('submit-btn');

// initialize state
let totalPlays = 0;
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
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
    console.log(data);
    let randomPokemon1 = data[randomNum1];
    let randomPokemon2 = data[randomNum2];
    let randomPokemon3 = data[randomNum3];
    console.log(randomPokemon1);
    console.log(randomPokemon2);
    console.log(randomPokemon3);  

    pokemon1.value = randomPokemon1.id;
    pokemon2.value = randomPokemon2.id;
    pokemon3.value = randomPokemon3.id;

    image1.src = randomPokemon1.url_image;
    image2.src = randomPokemon2.url_image;
    image3.src = randomPokemon3.url_image;
}

renderRandomPokemon();