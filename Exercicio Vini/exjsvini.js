function Celular(marca, modelo, processador, tela, cameras, bateria) {

    this.marca = marca
    this.modelo = modelo
    this.processador = processador
    this.tela = tela
    this.cameras = cameras
    this.bateria = bateria
    this.ligar = function() {
        alert(this.modelo + " " + this.marca)
    }

}