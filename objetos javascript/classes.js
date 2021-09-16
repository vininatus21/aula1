function Celular(marca, processador, chip, tamanhotela, camera) {
    this.marca = marca;
    this.processador = processador;
    this.chip = chip;
    this.tamanhotela = tamanhotela;
    this.camera = camera;
    this.Ligar = function() {
        alert("ligando");
    }
}
var c1 = new Celular("iphone", "snapdragon 1.3", "chip1", "6", "12MP");
var c2 = new Celular("galaxy", "snapdragon 2.3", "chip2", "7", "15MP");