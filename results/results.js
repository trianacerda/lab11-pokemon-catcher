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
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        },
        {
            label: '# of preferred',
            data: preferredArray,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
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

