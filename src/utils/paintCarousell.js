import Carousell from '../templates/Carousell';
import GenerationCover from '../templates/GenerationCover';
import Home from '../pages/Home';
import lozad from 'lozad';


async function paintCarousell(event){
    const details = document.querySelector("#header > div > details");
    

    details.removeAttribute('open');
        
        
        const generationCover = document.querySelector("#generation-cover");
        

        window.scrollTo(0,0);
        switch(event.target.outerText){
            case "1ra Generación":
                
                content.innerHTML = await Home(151,0);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Kanto");
                
                break;
            case "2da Generación":
                content.innerHTML = await Home(100, 151);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Johto");
                break;
            case "3ra Generación":
                carousell.innerHTML = await Carousell(135, 251);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Hoenn");
                break;
            case "4ta Generación":
                carousell.innerHTML = await Carousell(108, 386);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Sinnoh");
            break;
            case "5ta Generación":
                carousell.innerHTML = await Carousell(154, 494);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Teselia");
            break;
            case "6ta Generación":
                carousell.innerHTML = await Carousell(72, 649);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Kalos");
            break;
            case "7ma Generación":
                carousell.innerHTML = await Carousell(88, 721);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Alola");
            break;
            case "8va Generación":
                carousell.innerHTML = await Carousell(89, 809);
                generationCover.innerHTML = await GenerationCover(event.target.outerText, "Región Galar");
            break;
            default:
                break;
        }

        const carousellImages = document.querySelectorAll('.card-img');
    const observer = lozad(carousellImages);
    console.log("paso por a :v");
    observer.observe();
    
}

export default paintCarousell;