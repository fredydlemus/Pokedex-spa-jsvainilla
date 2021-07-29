import Cards from '../components/Cards';
import getData from '../utils/getData';
import getDataOnlyPokemon from '../utils/getDataOnlyPokemon';


const Carousell = async (limit = 151, offset = 0) => {
    
    const pokemons = await getData({
        limit: `?limit=${limit}&offset=${offset}`
    });
    const numeroPokemons = pokemons.results.length;
    // const numeroRenderTarjetas = 3;
    let cardsArray = [];
    
    for(let i = 0; i < numeroPokemons; i++){
        const pokemon = await getDataOnlyPokemon(pokemons.results[i].url);
        cardsArray.push(Cards(pokemon.id, pokemon.name, pokemon.types));
        // console.log(pokemon.types);
        // console.log(cardsArry);
    }

    // console.log(cardsArray);
    cardsArray = cardsArray.join("");
    
    
    const view = `
    
    <div class="window">
        <ul class="pokemon-container">
        ${cardsArray}
        </ul>
        <div class="bottom-carousell"></div>
    </div>
    
    `;

    return view;
}

export default Carousell;
