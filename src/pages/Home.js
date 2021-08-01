import GenerationCover from '../templates/GenerationCover';
import Carousell from '../templates/Carousell';


const Home = async (limit = 150, offset = 0) => {

    const carousell = await Carousell(limit, offset);
    const generationCover = await GenerationCover();

    const view = `
    <section class="main-generation_cover" id="generation-cover">
        ${generationCover}
    </section>
    <section class="carousell" id="carousell">
        ${carousell}
    </section>
    `;

    

    return view;
}

export default Home;