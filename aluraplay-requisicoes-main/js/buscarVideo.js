import {conectaApi} from './conectaApi.js'
import {mostrarVideos} from './mostrarVideos.js'
const botao=document.querySelector('[data-btn]');


async function buscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa= document.querySelector('[data-pesquisa]').value;
    const busca= await conectaApi.buscaVideo(dadosDePesquisa);
    console.log(busca.length)
   
    if(busca.length==0){
        alert('Nenhum resultado encontrado!')
        return
    } 
    return busca
}
async function mostraVideosBuscados(VideosBuscados){
    const lista=document.querySelector('[data-lista]');
    lista.innerHTML=''
    
    await VideosBuscados.forEach(element => {
        mostrarVideos.constroiCard(element)
        
    })
}
botao.addEventListener('click',async function(evento){
    
    mostraVideosBuscados(await buscarVideo(evento))
})