function iniciar(){
    window.localStorage.clear()
    const tema = document.querySelector('#select').value
    console.log(tema)
    window.localStorage.setItem('tema', tema)
    window.location.href = 'file:///C:/Users/scham/OneDrive/%C3%81rea%20de%20Trabalho/Estudos%20Programa%C3%A7%C3%A3o/Projetos/Iniciante/Jogo%20da%20forca/jogo.html'
}