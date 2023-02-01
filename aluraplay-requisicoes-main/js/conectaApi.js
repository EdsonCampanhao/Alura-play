
async function listaVideos() {
    const conexao = await fetch("http://localhost:3000/videos");
    const conexaoConvertida = await conexao.json();
      console.log(conexaoConvertida)
    return conexaoConvertida
  
}
async function criaVideo(titulo,descricao,url,imagem){
    const conexao= await fetch("http://localhost:3000/videos",{
        method:"POST",
        headers:{
            'content-type':"application/json"
        },
        body:JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })

    });
    if (!conexao.ok){
        throw new Error("não foi possível enviar o vídeo")
    }

    const conexaoConvertida= await conexao.json();
    console.log(conexaoConvertida)
    return conexaoConvertida;
}
async function buscaVideo(termoBuscado){
    const conexao= await fetch(`http://localhost:3000/videos?q=${termoBuscado}`)
    const conexaoConvertida= conexao.json()
    return conexaoConvertida;
}
export const conectaApi={
    listaVideos,
    criaVideo,
    buscaVideo
}

