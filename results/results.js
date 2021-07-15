import { getPokedex, findById } from '../storage-utils.js';
import data from '../data/pokemon.js';

const getResults = getPokedex();


const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');
const results = document.getElementById('results');
results.appendChild(resultsDiv);

for (let item of getResults){

    const pokemonImg = document.createElement('img');
    const pokemonId = findById(data, Number(item.id));
    pokemonImg.src = pokemonId.url_image;
    resultsDiv.appendChild(pokemonImg);
    
    const shown = document.createElement('div');
    resultsDiv.appendChild(shown);
    shown.textContent = `Shown: ${item.shown}`;
    
    const preferred = document.createElement('div');
    resultsDiv.appendChild(preferred);
    preferred.textContent = `Preferred: ${item.preferred}`;
    
}



//want to refactor this into a funciton
