import { getPokedex, findById } from '../storage-utils.js';
import data from '../data/pokemon.js';

const results = document.getElementById('results');

const getResults = getPokedex();
const resultsDiv = document.createElement('div');
results.appendChild(resultsDiv);
resultsDiv.classList.add('results');

for (let item of getResults){
    const pokemonImg = document.createElement('img');
    const pokemonId = findById(data, Number(item.id));
    //we want this loop to find pokemon id from LS and display it on results page
    pokemonImg.src = pokemonId.url_image;
    resultsDiv.appendChild(pokemonImg);
}

//want to refactor this into a funciton





