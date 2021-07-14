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

export function getPokedex() {
    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);
    return results;
}

export function setPokedex(pokemonArray) {
    localStorage.setItem('RESULTS', JSON.stringify(pokemonArray));
}

//write function encounterPokemon (showFruit)
// -- changed shown++

//write function capturePokemon (preferredFruit)
// -- changed prefered++
// -- changed shown--

//TDD all functions above ^^^