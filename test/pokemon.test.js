// IMPORT MODULES under test here:
import { getPokedex, showPokemon, setPokedex } from '../storage-utils.js';

const test = QUnit.test;

test('showPokemon should create a results object if pokemon not previously shown', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResults = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    showPokemon(1);

    const results = getPokedex();

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

    const results = getPokedex();

    expect.deepEqual(results[0], fakeResults);
});

test('getPokedex should return object from localStorage', (expect) => {
    localStorage.removeItem('RESULTS');
    const fakeResults = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    showPokemon(1);
  
    const results = getPokedex();

    expect.deepEqual(results[0], fakeResults);
});

test('setPokedex should set stringified key value pair in localStorage', (expect) => {
    localStorage.removeItem('RESULTS');
    
    const fakeResults = {
        id: 1,
        shown: 1,
        preferred: 0
    };

    let results = setPokedex(fakeResults);
  
    let results = JSON.parse(fakeResults);
    const expected = getPokedex(fakeResults);
    
    expect.deepEqual(results, expected);
});
