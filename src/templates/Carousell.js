import Tarjet from '../components/Tarjet';

const Carousell = () => {
    const view = `
    <div class="arrow arrow.left"></div>
    <div class="window">
        <div class="pokemon-container">
            ${Tarjet()}
            ${Tarjet()}
            ${Tarjet()}
        </div>
    </div>
    
    `;

    return view;
}

export default Carousell;