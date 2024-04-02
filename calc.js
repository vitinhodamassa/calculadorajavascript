function limpar(){
    document.getElementById('resultado'). innerHTML=""
}
function voltar(){
    var resultado = document.getElementById('resultado').innerHTML
    document.getElementById('resultado').innerHTML= resultado.substring(0, resultado.length - 1)
}

function inserir(botao){
    var numero = document.getElementById('resultado'). innerHTML
    document.getElementById('resultado') . innerHTML = numero + botao 
}
function calcular(){
    var caixinha = document.getElementById('resultado').innerHTML
if (caixinha) {
    document.getElementById ('resultado').innerHTML=
    eval(caixinha)
} else(
    document.getElementById('resultado'). innerHTML
)
}

//id
resultado