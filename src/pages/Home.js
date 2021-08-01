import GenerationCover from '../templates/GenerationCover';
import Carousell from '../templates/Carousell';
import lozad from 'lozad';

const Home = async () => {

    

    const view = `
    <section class="main-generation_cover" id="generation-cover">
        ${await GenerationCover()}
    </section>
    <section class="carousell" id="carousell">
        ${await Carousell()}
    </section>
    `;

    

    return view;
}

export default Home;