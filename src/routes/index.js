import Header from '../templates/Header';
import GenerationCover from '../templates/GenerationCover';

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


};



export default router;