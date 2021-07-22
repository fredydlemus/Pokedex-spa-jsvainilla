import Cards from '../components/Cards';

const Carousell = () => {
    const view = `
    <div class="arrow arrow.left"></div>
    <div class="window">
        <div class="pokemon-container">
            ${Cards()}
            ${Cards()}
            ${Cards()}
        </div>
    </div>
    
    `;

    return view;
}

export default Carousell;