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
            <li class="generation"><button>1ra Generación</button></li>
            <li class="generation"><button>2da Generación</button></li>
            <li class="generation"><button>3ra Generación</button></li>
            <li class="generation"><button>4ta Generación</button></li>
            <li class="generation"><button>5ta Generación</button></li>
            <li class="generation"><button>6ta Generación</button></li>
            <li class="generation"><button>7ma Generación</button></li>
            <li class="generation"><button>8va Generación</button></li>
    
        </ul>
    </details>
    
</div>



`;
    
    return view;
}

export default Header;