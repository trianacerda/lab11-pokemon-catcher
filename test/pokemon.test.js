// IMPORT MODULES under test here:
import { showPokemon } from '../storage-utils.js';

const test = QUnit.test;

test('showPokemon should create a results object if pokemon not previously shown', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResults = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    showPokemon(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    expect.deepEqual(results[0], fakeResults);
});

test('showPokemon should increment by results if pokemon previously shown', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResults = {
        id: 1,
        shown: 3,
        preferred: 0
    };

    showPokemon(1);
    showPokemon(1);
    showPokemon(1);

    const resultsString = localStorage.getItem('RESULTS') || '[]';
    const results = JSON.parse(resultsString);

    expect.deepEqual(results[0], fakeResults);
});