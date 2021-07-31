import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getImagePokemon from '../utils/getImagePokemon';

const Character = async () => {
    let numString;
    const id = getHash();
    const character = await getData({id: id});
    let abilitiesArray = [];


    if(id.toString().length == 1){
        numString = "00"+id;
        
    }else if(id.toString().length == 2){
        numString = "0"+id
    }

    for(let i = 0; i < character.abilities.length; i++){
        abilitiesArray.push(`<p>${character.abilities[i].ability.name}</p>`);
    }

    abilitiesArray = abilitiesArray.join("");
    console.log(abilitiesArray);
    const view = `
    <div class="Characters-inner">
        <article class="Characters-card">
            <img src="${getImagePokemon(numString)}" alt="${character.name}">
            <h3>${id}</h3>
            <h2>${character.name}</h2>
            
            <h3>Abilities:</h3>
            ${abilitiesArray}
            <h3>Moves:</h3>
        </article>
    </div>
    
    `;

    return view;
}

export default Character;