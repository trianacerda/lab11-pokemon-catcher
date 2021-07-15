import { getPokedex, findById } from '../storage-utils.js';
import data from './data/pokemon.js';

const results = document.getElementById('results');

const getResults = getPokedex();

for (let item of getResults){
    const pokemon = findById(pokemon, item.id);
    //we want this loop to find pokemon id from LS and display it on results page
}
//want to refactor this into a funciton
const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');

const pokemonImg = document.createElement('img');
pokemonImg.src = 'http://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png';
resultsDiv.appendChild(pokemonImg);
