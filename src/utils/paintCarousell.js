import Carousell from '../templates/Carousell';
import GenerationCover from '../templates/GenerationCover';
import Home from '../pages/Home';
import lozad from 'lozad';
import router from '../routes';



async function paintCarousell(event){
    
    let limit;
    let offset;
    let region;
    
    window.removeEventListener('hashchange', router);
    location.hash = "/Pokedex-spa-jsvainilla/";    
    

    const details = document.getElementById("details");
    const content = document.getElementById('content');

    details.removeAttribute('open');
        
        
    
        

        window.scrollTo(0,0);
        switch(event.target.outerText){
            case "1ra Generación":
                
                limit = 150;
                offset = 0;
                region = "Kanto";
                                
                break;
            case "2da Generación":
                
                limit = 100;
                offset = 151;
                region = "Johto";
                    
                break;
            case "3ra Generación":
                limit = 135;
                offset = 251;
                region = "Hoenn";
                
                break;
            case "4ta Generación":
                limit = 108;
                offset = 386;
                region = "Sinnoh";
                
                break;
            case "5ta Generación":
                limit = 154;
                offset = 494;
                region = "Teselia";
                
                break;
            case "6ta Generación":
                limit = 72;
                offset = 649;
                region = "Kalos";
                
                break;
            case "7ma Generación":
                limit = 88;
                offset = 721;
                region = "Alola";
                
                break;
            case "8va Generación":
                limit = 89;
                offset = 809;
                region = "Galar";
                
                break;
            default:
                break;
        }

        content.innerHTML = await Home(limit,offset);
                
                document.querySelector("#generation-cover").innerHTML = await GenerationCover(event.target.outerText, `Region ${region}`);

        // window.removeEventListener('hashchange', router);
        // location.hash =  "/";
        
       
        window.addEventListener('hashchange', router);

    const carousellImages = document.querySelectorAll('.card-img');
    const observer = lozad(carousellImages);
    
    observer.observe();

    
}

export default paintCarousell;