(()=>{"use strict";const e=()=>'\n\n<div class="Header-main">\n    <div class="Header-logo">\n        <img src="./assets/images/pokeball.png" alt="">\n        <h1>\n            <a href="/">Pokedex</a>\n        </h1>\n    </div>\n    <details class="Header-main--details">\n        <summary>Generación</summary>\n        <ul class="Header-nav--generation_list" id="generation-list">\n            <li class="generation"><a href="#/about/">1ra Generación</a></li>\n            <li class="generation"><a href="#/about/">2da Generación</a></li>\n            <li class="generation"><a href="#/about/">3ra Generación</a></li>\n            <li class="generation"><a href="#/about/">4ta Generación</a></li>\n            <li class="generation"><a href="#/about/">5ta Generación</a></li>\n            <li class="generation"><a href="#/about/">6ta Generación</a></li>\n            <li class="generation"><a href="#/about/">7ma Generación</a></li>\n            <li class="generation"><a href="#/about/">8va Generación</a></li>\n    \n        </ul>\n    </details>\n    \n</div>\n\n\n\n',n=(e="1ra Generación",n="Región Kanto")=>`\n    <h2>${e}</h2>\n    <p>${n}</p>\n    \n    `,a=e=>`https://pokeres.bastionbot.org/images/pokemon/${e}.png`,t=(e,n,t)=>{let i=[];i=t.map((e=>`<p class="tipo ${e.type.name}">${e.type.name}</p>`)),i=i.join("");return`\n    <li class="card-pokemon">\n        <img src="${a(e)}" alt="">\n        <div class="card-pokemon-information">\n            <p>No. ${e}</p>\n            <h3>${n}</h3>\n            <div class="card-pokemon_tipos">\n                ${i}    \n            </div>\n        </div>\n        \n    </li>\n    `},i="https://pokeapi.co/api/v2/pokemon",r=async e=>{const n=e?`${i}${e}`:i;try{const e=await fetch(n);return await e.json()}catch(e){console.log("Fetch Error")}},o=async e=>{try{const n=await fetch(e);return await n.json()}catch(e){console.log("Fetch Error")}},s=async(e=151,n=0)=>{const a=await r(`?limit=${e}&offset=${n}`),i=a.results.length;let s=[];for(let e=0;e<i;e++){const n=await o(a.results[e].url);s.push(t(n.id,n.name,n.types))}s=s.join("");return`\n    \n    <div class="window">\n        <ul class="pokemon-container">\n        ${s}\n        </ul>\n        <div class="bottom-carousell"></div>\n    </div>\n    \n    `},c=()=>'\n    <img src="./assets/images/pokeball.png" alt="">\n        <h3>fredyflemus</h3>\n    \n    ',l=async()=>{document.getElementById("header").innerHTML=await e();const a=document.querySelector("#header > div > details"),t=document.getElementById("main"),i=document.getElementById("footer");i.innerHTML=await c();const r=document.createElement("section");r.classList.add("main-generation_cover"),r.innerHTML=await n(),t.insertBefore(r,i);const o=document.createElement("section");o.classList.add("carousell"),o.innerHTML=await s(),t.insertBefore(o,i),document.querySelectorAll(".generation > a").forEach((e=>{e.addEventListener("click",(async()=>{switch(a.removeAttribute("open"),window.scrollTo(0,0),e.outerText){case"1ra Generación":o.innerHTML=await s(151,0),r.innerHTML=await n(e.outerText,"Región Kanto");break;case"2da Generación":o.innerHTML=await s(100,151),r.innerHTML=await n(e.outerText,"Región Johto");break;case"3ra Generación":o.innerHTML=await s(135,251),r.innerHTML=await n(e.outerText,"Región Hoenn");break;case"4ta Generación":o.innerHTML=await s(108,386),r.innerHTML=await n(e.outerText,"Región Sinnoh");break;case"5ta Generación":o.innerHTML=await s(154,494),r.innerHTML=await n(e.outerText,"Región Teselia");break;case"6ta Generación":o.innerHTML=await s(72,649),r.innerHTML=await n(e.outerText,"Región Kalos");break;case"7ma Generación":o.innerHTML=await s(88,721),r.innerHTML=await n(e.outerText,"Región Alola");break;case"8va Generación":o.innerHTML=await s(89,809),r.innerHTML=await n(e.outerText,"Región Galar")}}))}))};window.addEventListener("load",l)})();