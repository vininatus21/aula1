function clicar() {
    var valores = [4, 2, 3]
    var valores2 = [2, 1, 4]
    var Somar = 0;
    for (var val = 0; val < valores.length; val++) {
        for (var val2 = 0; val2 < valores2.length; val2++) {
            if (valores[val] == valores2[val2]) {
                Somar = Somar + valores[val]
            }
        }
    }
    alert(Somar)
}