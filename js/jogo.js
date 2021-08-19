var altura =  0
var largura = 0
var vidas = 1
var tempo = 15
var tempoCriaMosquito = 2000

var nivel = window.location.search //só pega o texto depois do ?
nivel = nivel.replace('?' , '')//tirand a ? da srintg nivel


if(nivel === 'normal'){
    tempoCriaMosquito = 2000
}else if(nivel === 'dificil'){
    tempoCriaMosquito = 1000
}else if(nivel === 'impossivel'){
    tempoCriaMosquito = 700
}

function ajustaTamanho(){
    altura = window.innerHeight
    largura = window.innerWidth
    console.log(largura,altura )
}
ajustaTamanho()

var cronometro = setInterval(function () {
    tempo-= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
        document.getElementById('cronometro').innerHTML = tempo
    }
    } , 2000)

function posicaoRandomica(){

    //remover o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'game_over.html'
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


function iniciarJogo(){
    nivel = document.getElementById("nivel").value

    if(nivel === ''){
        alert("Selecione um nivel primeiro")
        return false
    }

    window.location.href = 'app.html?' + nivel //passando o endereço com parametro

  
}