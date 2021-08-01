const API = "https://pokeapi.co/api/v2/pokemon-species/";

const getPokemonDescription = async (id) =>{
    const apiURL = `${API}${id}`;

    try{
        const response = await fetch(apiURL);
        const data = response.json();
        return data;
    }catch(error){
        console.error(error);
    }
};

export default getPokemonDescription;