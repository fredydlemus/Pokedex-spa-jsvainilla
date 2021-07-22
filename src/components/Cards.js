const Tarjet = (num, name, tipe) => {
    const view = `
    <div class="card-pokemon">
        <img src="./assets/images/001.png" alt="">
        <p>No. ${num}</p>
        <h3>${name}</h3>
        <div class="card-pokemon_tipos">
            <p class="tipo planta">${tipe}</p>
            <p class="tipo veneno">${tipe}</p>
        </div>
    </div>
    `;

    return view;
}

export default Tarjet;