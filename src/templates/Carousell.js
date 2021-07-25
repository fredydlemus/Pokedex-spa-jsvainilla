import Cards from '../components/Cards';
import getData from '../utils/getData';
import getDataOnlyPokemon from '../utils/getDataOnlyPokemon';

const Carousell = async () => {
    let limit = 10;
    let offset = 0;
    const pokemons = await getData(`?limit=${limit}&offset=${offset}`);
    const numeroPokemons = pokemons.results.length;
    let cardsArray = [];
    for(let i = 0; i < numeroPokemons; i++){
        const pokemon = await getDataOnlyPokemon(pokemons.results[i].url);
        cardsArray.push(Cards(pokemon.id, pokemon.name, "tipo"));
        // console.log(pokemon);
        // console.log(cardsArry);
    }
    cardsArray = cardsArray.join("");
    const view = `
    <div class="arrow arrow-mobile"><img src="./assets/icons/up-arrow.svg" alt="up carousell"></div>
    <div class="arrow arrow-desktop"></div>
    <div class="window">
        <ul class="pokemon-container">
        ${cardsArray}
        </ul>
    </div>
    <div class="arrow arrow-mobile"><img src="./assets/icons/down-arrow.svg" alt="down carousell"></div>
    <div class="arrow arrow-desktop"></div>

    `;

    return view;
}

export default Carousell;