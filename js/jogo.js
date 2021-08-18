var altura =  0
var largura = 0

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura,altura )
}

ajustaTamanho()

function posicaoRandomica(){
    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX    
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento html com DOM 

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className = 'mosquito1'
    mosquito.style.left = posicaoX + 'px' //coloando o mosquito nessa posicao
    mosquito.style.top = posicaoY + 'px' //colocando o mosquito nessa posicao
    mosquito.style.position = 'absolute' //mosquito tem que ser absolute
    document.body.appendChild(mosquito) //estou colocando o mosquito no body
}