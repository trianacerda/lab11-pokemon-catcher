import { getPokedex, findById } from '../storage-utils.js';
import data from '../data/pokemon.js';

const getResults = getPokedex();

let preferredArray = [];
let names = [];
let shownArray = [];

const resultsDiv = document.createElement('div');
resultsDiv.classList.add('results');
const results = document.getElementById('results');
results.appendChild(resultsDiv);

for (let item of getResults){
    
    const pokemonImg = document.createElement('img');
    const pokemonId = findById(data, Number(item.id));

    names.push(pokemonId.pokemon);
    shownArray.push(item.shown);
    preferredArray.push(item.preferred);
    
    pokemonImg.src = pokemonId.url_image;
    resultsDiv.appendChild(pokemonImg);
    
    const shown = document.createElement('div');
    resultsDiv.appendChild(shown);
    shown.textContent = `Shown: ${item.shown}`;
    
    const preferred = document.createElement('div');
    resultsDiv.appendChild(preferred);
    preferred.textContent = `Preferred: ${item.preferred}`;
    
}


var ctx = document.getElementById('myChart').getContext('2d');
new Chart(ctx, {
    type: 'bar',
    data: {
        labels: names,
        datasets: [{
            label: '# of shown',
            data: shownArray,
            backgroundColor: [
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',
                'salmon',

            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
            ],
            borderWidth: 3
        },
        {
            label: '# of preferred',
            data: preferredArray,
            backgroundColor: [
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
                'teal',
            ],
            borderColor: [
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
                'black',
            ],
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            y: [ 
                {
                    ticks: {
                        beginAtZero: true, 
                        stepSize: 1
                    }
                }
            ]
        }
    }
});

