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
        let type = `<p class="${element.type.name} tipo">${element.type.name}</p>`
        typesArray.push(type);
        
    })

    abilitiesArray = abilitiesArray.join("");
    typesArray = typesArray.join("");
    console.log(character);
    console.log(entrys);
    
    
    
    

    const view = `

    <section class="Character" id="character">
        <article class="Character-header">
            <h3>${numString}/</h3>
            <h2>${character.name}</h2>
        </article>
        <section class="Character-info">
            <img src="${getImagePokemon(numString)}" alt="${character.name}">
            <section class="Character-card">
                <p class="Character-card-description">${entrys[version].flavor_text}</p>
                <div class="Character-card-info">
                    <section class="height">
                        <h3>height:</h3>
                        <p>${character.height} m</p>
                    </section>
                    <section class="weight">
                        <h3>Weight:</h3>
                        <p>${character.weight} kg</p>
                    </section>
                    <section class="abilities">
                        <h3>Abilities:</h3>
                        ${abilitiesArray}
                    </section>
                </div>
                <div class="Character-types">
                    <h3>Types:</h3>
                    ${typesArray}
                </div>
            </section>
        </section>
        <section class="Character-buttons">
            <a href="#/${parseInt(id)-1}" id="previous-button" class="disabledbutton">Previous</a>
            <a href="#/${parseInt(id)+1}" id="next-button" class="disabledbutton">Next</a>
        </section>
        <div class="bottom-character"></div>
    </section>
    

    
    
    `;

    

    return view;
}

export default Character;