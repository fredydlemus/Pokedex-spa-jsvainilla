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

    const details = document.querySelector("#header > div > details");
    const main = null || document.getElementById('main');

    const generationCoverNode = document.createElement("section");
    generationCoverNode.classList.add('main-generation_cover');
    generationCoverNode.innerHTML = await GenerationCover();
    main.appendChild(generationCoverNode);

    const carousellNode = document.createElement("section")
    carousellNode.classList.add('carousell');
    carousellNode.innerHTML = await Carousell();
    main.appendChild(carousellNode);

    document.querySelector("#generation-list > li:nth-child(1)").addEventListener("click", async () => {
        details.removeAttribute('open');
        carousellNode.innerHTML = await Carousell(151, 0);
        
    });

    document.querySelector("#generation-list > li:nth-child(2)").addEventListener("click", async () => {
        details.removeAttribute('open');
        carousellNode.innerHTML = await Carousell(100, 151);
        
    });

    document.querySelector("#generation-list > li:nth-child(3)").addEventListener("click", async () => {
        details.removeAttribute('open');
        carousellNode.innerHTML = await Carousell(135, 251);
        
    });

    document.querySelector("#generation-list > li:nth-child(4)").addEventListener("click", async () => {
        details.removeAttribute('open');
        carousellNode.innerHTML = await Carousell(108, 386);
        
    });
};



export default router;