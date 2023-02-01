import { conectaApi } from "./conectaApi.js";

const lista= document.querySelector("[data-lista]");

function constroiCard(video){
    lista.innerHTML+=`  <li class="videos__item">
    <iframe width="100%" height="72%" src=${video.url}
        title="YouTube video player"  frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
    <div class="descricao-video">
        <img src=${video.imagem} alt="logo canal alura">
        <h3>${video.titulo}</h3>
        <p>${video.descricao}</p>
    </div>
</li>`

return video
}

async function constroiHtml() {
    try{
    const listaApi = await conectaApi.listaVideos();
    listaApi.forEach(elemento => 
        constroiCard(elemento))
    } catch{
        alert('Não foi possível carregar a lista de videos')
        lista.innerHTML=`<h2> Não foi possível carregar a lista de videos</h2>`
    }
}

constroiHtml();

export const mostrarVideos = {
    constroiCard,
}