import Header from '../templates/Header';
import GenerationCover from '../templates/GenerationCover';
import Carousell from '../templates/Carousell';
import Footer from '../templates/Footer';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Character from '../pages/Character';
import Home from '../pages/Home';

const routes = {
    '/': Home,
    '/:id': Character,

};




const router = async () => {
    const header = null || document.getElementById('header');
    const content = document.getElementById('content');
    const footer = null || document.getElementById('footer');


    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : console.error("404");
    content.innerHTML = await render();


    const details = document.querySelector("#header > div > details");
    const carousel = document.getElementById('carousell');
    const generationCover = document.getElementById('generation-cover');

    document.querySelectorAll('.generation > button').forEach(element => {
        element.addEventListener("click", async () =>{
            details.removeAttribute('open');
            content.innerHTML = await Home();
            
            window.scrollTo(0,0);
            switch(element.outerText){
                case "1ra Generación":
                    
                    carousel.innerHTML = await Carousell(151,0);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Kanto");
                    
                    break;
                case "2da Generación":
                    carousel.innerHTML = await Carousell(100, 151);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Johto");
                    break;
                case "3ra Generación":
                    carousell.innerHTML = await Carousell(135, 251);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Hoenn");
                    break;
                case "4ta Generación":
                    carousell.innerHTML = await Carousell(108, 386);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Sinnoh");
                break;
                case "5ta Generación":
                    carousell.innerHTML = await Carousell(154, 494);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Teselia");
                break;
                case "6ta Generación":
                    carousell.innerHTML = await Carousell(72, 649);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Kalos");
                break;
                case "7ma Generación":
                    carousell.innerHTML = await Carousell(88, 721);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Alola");
                break;
                case "8va Generación":
                    carousell.innerHTML = await Carousell(89, 809);
                    generationCover.innerHTML = await GenerationCover(element.outerText, "Región Galar");
                break;
                default:
                    break;
            }
        })
    });
}

export default router;