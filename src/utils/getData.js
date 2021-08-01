const API = 'https://pokeapi.co/api/v2/pokemon/';

const getData = async ({limit, id}) => {
    const apiURL = id ? `${API}${id}` : `${API}${limit}`;
    
    try {
        const response = await fetch(apiURL);
        
        const data = await response.json();
        return data;

    } catch (error) {
        console.log('Fetch Error');
    };
}

export default getData;