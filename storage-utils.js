function findById(items, id){
    for (const item of items){
        if (item.id === id) {
            return item;
        }
    }
}

export function getPokedex() {
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(pokemonArray) {
    localStorage.setItem('RESULTS', JSON.stringify(pokemonArray));
}


export function showPokemon(id){
    const results = getPokedex();
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
    setPokedex(results);
}

export function capturePokemon(id){
    const results = getPokedex();
    const pokemonId = findById(results, id);
    if (!pokemonId) {
        const newPokemon = {
            id: id,
            shown: 1,
            preferred: 1
        };
        results.push(newPokemon);
    
    } else {
        pokemonId.preferred++;
    }
    setPokedex(results);
} 

