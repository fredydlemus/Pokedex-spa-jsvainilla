

const getDataOnlyPokemon = async (apiURL) => {
    
    try{
        const response = await fetch(apiURL);
        // console.log(apiURL);
        const data = await response.json();
        return data;

    }catch(error){
        console.log('Fetch Error');
    }
}

export default getDataOnlyPokemon;