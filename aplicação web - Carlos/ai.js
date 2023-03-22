var objetos = ['Cadeira', 'Impressora', 'Garfo'];
var campo = document.querySelector("input")
var add = document.querySelector("button")
var ord = document.getElementById('ord')

btn.onclick = function(){

    if(document.getElementById('objeto').value === ''){
    alert('Não existe')
    }
    else if(objetos.indexOf(campo.value) !== -1){ 
        alert('Objeto existe')
    }else {
        objetos.push(campo.value);
        console.log(objetos);
    }
}
     ord.onclick = function (){
        console.log(objetos.sort())
    }