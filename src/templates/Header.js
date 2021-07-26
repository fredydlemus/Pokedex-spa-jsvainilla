const Header = () => {
    const view = `

<div class="Header-main">
    <div class="Header-logo">
        <img src="./assets/images/pokeball.png" alt="">
        <h1>
            <a href="/">Pokedex</a>
        </h1>
    </div>
    <details class="Header-main--details">
        <summary>Generación</summary>
        <ul class="Header-nav--generation_list" id="generation-list">
            <li class="generation"><a href="#/about/">1ra Generación</a></li>
            <li class="generation"><a href="#/about/">2da Generación</a></li>
            <li class="generation"><a href="#/about/">3ra Generación</a></li>
            <li class="generation"><a href="#/about/">4ta Generación</a></li>
            <li class="generation"><a href="#/about/">5ta Generación</a></li>
            <li class="generation"><a href="#/about/">6ta Generación</a></li>
            <li class="generation"><a href="#/about/">7ma Generación</a></li>
            <li class="generation"><a href="#/about/">8va Generación</a></li>
    
        </ul>
    </details>
    
</div>



`;
    
    return view;
}

export default Header;