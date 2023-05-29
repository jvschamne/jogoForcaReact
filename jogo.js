/* Declarando variaveis*/
const tema = window.localStorage.getItem('tema')
const textoTema = document.querySelector('#tema')
const tentativas = document.querySelector('#tentativasRestantes')
const textoPalavra = document.querySelector('#palavra')
const botoes = document.querySelectorAll('button')

const temas = {
    frutas: ['Maracuja', 'Uva', 'Banana', 'Abacaxi', 'Laranja'],
    dc: ['Batman', 'AdaoNegro', 'Flash', 'Coringa', 'Arlequina'],
    marvel: ['Thor', 'Hulk', 'Coisa', 'Visao', 'DoutorEstranho', 'Groot'],
    paises: ['Alemanha', 'Brasil', 'Italia', 'Inglaterra', 'Argentina',]
}



const container = document.querySelector('.container')

let palavraEscolhida = ''
let letrasUsadas = ''
let tentativasRestantes = 5
let letrasAcertadas = 0

function selecionaLetra(letraEscolhida){
    console.log(letraEscolhida.value)
    if(letrasUsadas.includes(letraEscolhida.value)){
        console.log('Já usou essa letra')
    }
    else{
        if(palavraEscolhida.includes(letraEscolhida.value)){ //se voce acertar a letra 
            
            for(i=0; i<palavraEscolhida.length; i++){
                if(palavraEscolhida[i] == letraEscolhida.value){
                    let span = document.querySelectorAll('span')
                    console.log("Olha=", palavraEscolhida[i], span, span[i])
                    span[i].innerHTML = letraEscolhida.value
                    letrasAcertadas += 1
                }              
                
            }

            letraEscolhida.style.backgroundColor = 'rgb(34, 255, 0)'
            
        }
        else{ //se voce errar a letra 
            letraEscolhida.style.backgroundColor = 'rgb(255, 17, 0)'
            tentativasRestantes -= 1
            tentativas.innerHTML = 'Tentivas restantes: ' + tentativasRestantes 
        }
        letraEscolhida.style.color = 'white'
        letrasUsadas += letraEscolhida.value
    }
    console.log(letrasAcertadas)
    if(letrasAcertadas == palavraEscolhida.length){
        tentativas.classList.add('hidden')
        textoPalavra.classList.add('hidden')
        textoTema.innerHTML = 'Você venceu!'
    }
}

function escolhePalavra(){
    numeroAleatorio = Math.floor(Math.random() * temas[tema].length) //sorteia um numero de 0 a 9

    return temas[tema][numeroAleatorio]
}

function escrevePalavra(palavra){
    console.log('Tamanho palavra:', palavra.length)

    for(i=0; i<palavra.length; i++){
        let novoSpan = document.createElement('span')
        novoSpan.innerHTML = " " //palavra[i].toUpperCase()
        textoPalavra.appendChild(novoSpan)
    }

    
}

function main(){
    tentativas.innerHTML = 'Tentivas restantes: ' + tentativasRestantes 
    textoTema.innerHTML = 'Tema escolhido: ' + tema
    palavraEscolhida = escolhePalavra().toUpperCase()
    escrevePalavra(palavraEscolhida)
}

main()