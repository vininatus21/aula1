function Calculadora(campo1, campo2) {
    this.campo1 = campo1
    this.campo2 = campo2
    this.Somar = function() {
        return this.campo1 + this.campo2
    }
    this.Subtrair = function() {
        return this.campo1 - this.campo2
    }
    this.Multiplicar = function() {
        return this.campo1 * this.campo2
    }
    this.Dividir = function() {
        return this.campo1 / this.campo2

    }

}