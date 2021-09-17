function Celular(marca, modelo, processador, tela, cameras, bateria) {

    this.marca = marca
    this.modelo = modelo
    this.processador = processador
    this.tela = tela
    this.cameras = cameras
    this.bateria = bateria
    this.samC = function samsungC() {
        alert("Não estou conseguindo fazer o alerta do samsung ")
    }

}
var C1 = new Celular("Samsung", "Note20", "Exynos 990", "6.7", "12 Mp + 64 Mp + 12 Mp", "4300 mAh");
var C2 = new Celular("Xiaomi", "Note9S", "Snapdragon 720G ", "6.7", "48 Mp + 8 Mp + 5 Mp + 2 Mp", "5000 mAh");
var C3 = new Celular("iPhone ", "12 Pro Max", "Apple A14 Bionic", "6.7", "12 Mp + 12 Mp + 12 Mp", "3687 mAh");



C1.samC();
C1.marca
C1.modelo
C1.processador
C1.tela
C1.cameras
C1.bateria