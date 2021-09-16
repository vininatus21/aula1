function Teclado(quantidadeteclas, marca, tamanho, possuinumeros) {
    this.quantidadeteclas = quantidadeteclas;
    this.marca = marca;
    this.tamanho = tamanho
    this.possuinumeros = possuinumeros;
    this.clica = function() {
        alert("cliquei");
    }

}

var teclado1 = new Teclado("12", "logitech", "12", "sim");
var teclado2 = new Teclado("12", "dell", "12", "sim");