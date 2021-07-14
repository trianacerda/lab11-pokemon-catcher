export function showPokemon(id) {
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    const pokemonId = findById(results, id);

    if (!pokemonId) {
        const newPokemon = {
            id: id,
            shown: 1,
            preferred: 0
        };
        results.push(newPokemon);
    
    } else {
        pokemonId.shown++;
    }
    localStorage.setItem('RESULTS', JSON.stringify(results));
}

function findById(items, id){
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}