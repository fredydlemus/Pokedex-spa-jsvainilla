const GenerationCover = (generation = "1ra Generación", region = "Región Kanto") => {

   
    const view = `
    <h2>${generation}</h2>
    <p>${region}</p>
    
    `;

    return view;
}

export default GenerationCover;