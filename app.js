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

}