var altura =  0
var largura = 0
var vidas = 1

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura,altura )
}

ajustaTamanho()

function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            alert("interromper o jogo")
        }else{
            document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"
            vidas++
        }
    }

    var posicaoX = Math.floor(Math.random() * largura) - 90
    var posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX // se ele for menor que 0 ele rebecebe 0 se não ele mesmo
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX,posicaoY)

    //criar o elemento html com DOM 

    var mosquito = document.createElement('img')
    mosquito.src = "imagens/mosca.png"
    mosquito.className =  tamanhoMosquito() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px' //coloando o mosquito nessa posicao
    mosquito.style.top = posicaoY + 'px' //colocando o mosquito nessa posicao
    mosquito.style.position = 'absolute' //mosquito tem que ser absolute
    mosquito.id = 'mosquito' //definindo um id 
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito) //estou colocando o mosquito no body
}

function tamanhoMosquito(){
    var classe =  Math.floor(Math.random() * 3)
    
   if(classe == 0){
       return 'mosquito1'
   }else if(classe == 1){
       return 'mosquito2'
   }else if(classe == 2){
       return 'mosquito3'
   }

}

function ladoAleatorio(){
    var lado =  Math.floor(Math.random() * 2)
    
    if(lado == 0){
       return 'ladoA'
     }else if(lado == 1){
       return 'ladoB'
     }
}