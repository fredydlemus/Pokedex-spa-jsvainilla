import getHash from '../utils/getHash';
import getData from '../utils/getData';
import getImagePokemon from '../utils/getImagePokemon';
import getPokemonDescription from '../utils/getPokemonDescription';

const Character = async () => {
    let numString;
    const id = getHash();
    const character = await getData({id: id});
    let abilitiesArray = [];
    let typesArray = [];
    const description = await getPokemonDescription(id);
    
    let entrys = description.flavor_text_entries;
    console.log(description);
    let version;


    if(id.toString().length == 1){
        numString = "00"+id;
        
    }else if(id.toString().length == 2){
        numString = "0"+id
    }else{
        numString = id;
    }

    version = entrys.findIndex((elemento) => ((elemento.version.name === "shield" || elemento.version.name === "alpha-sapphire") && elemento.language.name === "en"));
    

    character.abilities.forEach(element => {
        let ability = `<p>${element.ability.name}</p>`
        abilitiesArray.push(ability);
    });

    character.types.forEach(element => {
        let type = `<p>${element.type.name}</p>`
        typesArray.push(type);
        
    })

    abilitiesArray = abilitiesArray.join("");
    typesArray = typesArray.join("");
    console.log(character);
    console.log(entrys);
    
    
    
    

    const view = `

    
        <article class="Characters-header">
            <h3>${numString}</h3>
            <h2>${character.name}</h2>
        </article>
        <section class="Characters-info">
            <img src="${getImagePokemon(numString)}" alt="${character.name}">
            <section class="Character-card">
                <p class="Charcter-description">${entrys[version].flavor_text}</p>
                <div class="Character-card-info">
                    <h3>Height:</h3>
                    <p>${character.height} m</p>
                    <h3>weight:</h3>
                    <p>${character.weight} kg</p>
                    <h3>Abilities:</h3>
                    ${abilitiesArray}
                </div>
                <div class="character-types">
                    <h3>Types:</h3>
                    ${typesArray}
                </div>
            </section>
        </section>
        <section class="Character-buttons">
            <button>Back</button>
            <button>Next</button>
        </section>
    
    
    `;

    return view;
}

export default Character;