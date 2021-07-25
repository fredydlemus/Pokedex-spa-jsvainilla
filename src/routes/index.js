import Header from '../templates/Header';
import GenerationCover from '../templates/GenerationCover';
import Carousell from '../templates/Carousell';

// const routes = {
//     '/': Home,
//     '/:id': Character,
//     '/contact': 'Contact'
// };




const router = async () => {
    const header = null || document.getElementById('header');
    header.innerHTML = await Header();

    const main = null || document.getElementById('main');

    const generationCoverNode = document.createElement("section");
    generationCoverNode.classList.add('main-generation_cover');
    generationCoverNode.innerHTML = await GenerationCover();
    main.appendChild(generationCoverNode);

    const carousellNode = document.createElement("section")
    carousellNode.classList.add('carousell');
    carousellNode.innerHTML = await Carousell();
    main.appendChild(carousellNode);

   

};



export default router;