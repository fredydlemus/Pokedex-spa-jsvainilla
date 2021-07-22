import Cards from '../components/Cards';
import getData from '../utils/getData';

const Carousell = async () => {
    let limit = 150;
    let offset = 0;
    const pokemons = await getData(`?limit=${limit}&offset=${offset}`);
    console.log(pokemons.results[0].name);
    console.log(pokemons);
    
    const view = `
    <div class="arrow arrow-mobile"><img src="./assets/icons/up-arrow.svg" alt="up carousell"></div>
    <div class="arrow arrow-desktop"></div>
    <div class="window">
        <ul class="pokemon-container">
            ${Cards(0, pokemons.results[0].name, "plant")}
            ${Cards()}
            ${Cards()}
        </ul>
    </div>
    <div class="arrow arrow-mobile"><img src="./assets/icons/down-arrow.svg" alt="down carousell"></div>
    <div class="arrow arrow-desktop"></div>

    `;

    return view;
}

export default Carousell;