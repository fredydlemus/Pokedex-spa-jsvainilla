import Cards from '../components/Cards';
import getData from '../utils/getData';
import getDataOnlyPokemon from '../utils/getDataOnlyPokemon';


const Carousell = async (j = 0) => {
    let limit = 151;
    let offset = 0;
    const pokemons = await getData(`?limit=${limit}&offset=${offset}`);
    const numeroPokemons = pokemons.results.length;
    const numeroRenderTarjetas = 3;
    let cardsArray = [];
    
    // document.querySelector(".arrow-mobile-up").addEventListener("click", clickBack);
    // document.querySelector(".arrow-mobile-down").addEventListener("click", clickNext);


    for(let i = 0; i < numeroPokemons; i++){
        const pokemon = await getDataOnlyPokemon(pokemons.results[i].url);
        cardsArray.push(Cards(pokemon.id, pokemon.name, pokemon.types));
        console.log(pokemon.types);
        // console.log(cardsArry);
    }

    





    console.log(cardsArray);
    // console.log(cardsRender);
    cardsArray = cardsArray.join("");
    // cardsRender = cardsRender.join("");
    
    const view = `
    
    <div class="window">
        <ul class="pokemon-container">
        ${cardsArray}
        </ul>
    </div>
    
    `;

    return view;
}

export default Carousell;
