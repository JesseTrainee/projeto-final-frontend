function enviar(){

var enviar = document.getElementById('botao-enviar').value;
var email = document.getElementById('email').value;
var nome = document.getElementById('nome').value;
var pedido = document.getElementById('textarea').value;
if(email != "" && nome != "" && nome != "" && pedido != ""){
    alert("Pedido enviado! Entraremos em contato em breve!")
}      
}