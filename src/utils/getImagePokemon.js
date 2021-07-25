const API = `https://pokeres.bastionbot.org/images/pokemon/`;

const getImagePokemon = (pokemonID) => {
    const apiURL = `${API}${pokemonID}.png`;
    return apiURL;
};

export default getImagePokemon;