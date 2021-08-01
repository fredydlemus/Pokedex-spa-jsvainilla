import getImagePokemon from '../utils/getImagePokemon';

const Tarjet = (num, name, type) => {
    
    let numString;
    let typesArray = [];
    typesArray = type.map(type => {

        return `<p class="tipo ${type.type.name}">${type.type.name}</p>`;
    });
    typesArray = typesArray.join("");
    // console.log(typesArray);

    if(num.toString().length == 1){
        numString = "00"+num;
        
    }else if(num.toString().length == 2){
        numString = "0"+num
    }else{
        numString = num;
    }

    
    const view = `
    <li class="card-pokemon">
        <a href="#/${num}">
            <img width="85%" height="auto" data-src="${getImagePokemon(numString)}" alt="" class="card-img" data-backgrund-image="../assets/images/pokemon.png">
            <div class="card-pokemon-information">
                <p>No. ${num}</p>
                <h3>${name}</h3>
                <div class="card-pokemon_tipos">
                    ${typesArray}    
                </div>
            </div>
        </a>
        
        
    </li>
    `;
    

    return view;
}

export default Tarjet;