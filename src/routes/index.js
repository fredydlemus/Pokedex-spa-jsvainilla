import Header from '../templates/Header';

// const routes = {
//     '/': Home,
//     '/:id': Character,
//     '/contact': 'Contact'
// };




const router = async () => {
    const header = null || document.getElementById('header');

    header.innerHTML = await Header();

    const generations = document.querySelector('#header-nav');
    const generationList = document.getElementById('generation-list');


    generations.addEventListener('touchstart',  (evento) => {
    evento.preventDefault();
    generationList.classList.remove('hidden');
    generationList.classList.add('show');
    
    generations.addEventListener('touchstart', closeList);

});

const closeList = (evento) => {
    evento.preventDefault();
    generationList.classList.remove('show');
    generationList.classList.add('hidden');
    generations.removeEventListener('touchstart', closeList);
}
};



export default router;