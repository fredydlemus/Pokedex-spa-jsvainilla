import Header from '../templates/Header';
import GenerationCover from '../templates/GenerationCover';
import Carousell from '../templates/Carousell';
import Footer from '../templates/Footer';

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
    const footer = null || document.getElementById('footer');
    footer.innerHTML = await Footer();

    const generationCoverNode = document.createElement("section");
    generationCoverNode.classList.add('main-generation_cover');
    generationCoverNode.innerHTML = await GenerationCover();
    main.insertBefore(generationCoverNode, footer);

    const carousellNode = document.createElement("section")
    carousellNode.classList.add('carousell');
    carousellNode.innerHTML = await Carousell();
    main.insertBefore(carousellNode, footer);

    document.querySelectorAll('.generation > a').forEach(element => {
        element.addEventListener("click", async () =>{
            details.removeAttribute('open');
            
            switch(element.outerText){
                case "1ra Generación":
                    
                    carousellNode.innerHTML = await Carousell(151,0);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Kanto");
                    break;
                case "2da Generación":
                    carousellNode.innerHTML = await Carousell(100, 151);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Johto");
                    break;
                case "3ra Generación":
                    carousellNode.innerHTML = await Carousell(135, 251);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Hoenn");
                    break;
                case "4ta Generación":
                    carousellNode.innerHTML = await Carousell(108, 386);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Sinnoh");
                break;
                case "5ta Generación":
                    carousellNode.innerHTML = await Carousell(154, 494);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Teselia");
                break;
                case "6ta Generación":
                    carousellNode.innerHTML = await Carousell(72, 649);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Kalos");
                break;
                case "7ma Generación":
                    carousellNode.innerHTML = await Carousell(88, 721);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Alola");
                break;
                case "8va Generación":
                    carousellNode.innerHTML = await Carousell(89, 809);
                    generationCoverNode.innerHTML = await GenerationCover(element.outerText, "Región Galar");
                break;
                default:
                    break;
            }
        })
    });
    
};



export default router;