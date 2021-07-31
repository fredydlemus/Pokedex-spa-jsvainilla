const API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;

const getImagePokemon = (pokemonID) => {
    const apiURL = `${API}${pokemonID}.png`;
    return apiURL;
};

export default getImagePokemon;