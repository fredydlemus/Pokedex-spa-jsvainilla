import Header from '../templates/Header';
import Footer from '../templates/Footer';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import Character from '../pages/Character';
import Home from '../pages/Home';
import paintCarousell from '../utils/paintCarousell';
import lozad from 'lozad';


const routes = {
    '/': Home,
    '/:id': Character,

};




const router = async () => {

    
    
    
    


    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
    const footer = null || document.getElementById('footer');


    header.innerHTML = await Header();
    footer.innerHTML = await Footer();

    
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : console.error("404");
    content.innerHTML = await render();
    window.scrollTo(0,0);

    


    const carousellImages = document.querySelectorAll('.card-img');
    const observer = lozad(carousellImages);
    observer.observe();
    


    
    document.getElementById('generation-list').addEventListener('click', (event) => {
        const tagName = event.target.tagName;
        if(['LI', 'BUTTON'].includes(tagName)){
            paintCarousell(event);
            
        }

        
    })

    

    if(document.getElementById('character')){
        
        const previousButton = document.getElementById('previous-button');
        const nextButton = document.getElementById('next-button');
        
        if(parseInt(getHash()) !== 1){
            previousButton.classList.remove('disabledbutton');
            }

        if(parseInt(getHash()) !== 898){
            nextButton.classList.remove('disabledbutton');
            
        }

       

    }
    

    //Add lazy loading
    
    
}



export default router;