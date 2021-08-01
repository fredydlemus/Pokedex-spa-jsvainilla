import Carousell from '../templates/Carousell';
import GenerationCover from '../templates/GenerationCover';
import Home from '../pages/Home';
import lozad from 'lozad';
import router from '../routes';



async function paintCarousell(event){
    
    
    window.removeEventListener('hashchange', router);
    location.hash = "/Pokedex-spa-jsvainilla/";    
    

    const details = document.getElementById("details");
    const content = document.getElementById('content');

    details.removeAttribute('open');
        
        
    
        

        window.scrollTo(0,0);
        switch(event.target.outerText){
            case "1ra Generación":
                
                content.innerHTML = await Home(151,0);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Kanto");
                
                break;
            case "2da Generación":
                
                content.innerHTML = await Home(100, 151);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Johto");
                
                break;
            case "3ra Generación":
                content.innerHTML = await Home(135, 251);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Hoenn");
                break;
            case "4ta Generación":
                content.innerHTML = await Home(108, 386);
               
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Sinnoh");
            break;
            case "5ta Generación":
                content.innerHTML = await Home(154, 494);
               
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Teselia");
            break;
            case "6ta Generación":
                content.innerHTML = await Home(72, 649);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Kalos");
            break;
            case "7ma Generación":
                content.innerHTML = await Home(88, 721);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Alola");
            break;
            case "8va Generación":
                content.innerHTML = await Home(89, 809);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, "Región Galar");
            break;
            default:
                break;
        }

        // window.removeEventListener('hashchange', router);
        // location.hash =  "/";
        
       
        window.addEventListener('hashchange', router);

    const carousellImages = document.querySelectorAll('.card-img');
    const observer = lozad(carousellImages);
    
    observer.observe();

    
}

export default paintCarousell;