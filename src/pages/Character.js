import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getImagePokemon from '../utils/getImagePokemon';

const Character = async () => {
    const id = getHash();
    const character = await getData({id: id});
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${getImagePokemon(id)}" alt="${character.name}">
            <h2>${character.name}</h2>
        </article>
    </div>
    
    `;

    return view;
}

export default Character;