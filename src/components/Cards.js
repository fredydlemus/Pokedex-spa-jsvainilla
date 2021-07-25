const Tarjet = (num, name, type) => {
    console.log(type[0].type.name);
    let typesArray = [];
    typesArray = type.map(type => {

        return `<p class="tipo ${type.type.name}">${type.type.name}</p>`;
    });
    typesArray = typesArray.join("");
    console.log(typesArray);


    const view = `
    <li class="card-pokemon">
        <img src="./assets/images/001.png" alt="">
        <div class="card-pokemon-information">
            <p>No. ${num}</p>
            <h3>${name}</h3>
            <div class="card-pokemon_tipos">
                ${typesArray}    
            </div>
        </div>
        
    </li>
    `;

    return view;
}

export default Tarjet;