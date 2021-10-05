function clicar() {
    var valores = [1581, 5, 6]
    var valores2 = [4, 1, 1581]
    for (var val = 0; val < valores.length; val++) {
        for (var val2 = 0; val2 < valores2.length; val2++) {
            if (valores[val] == valores2[val2]) {
                alert(valores[val] + valores2[val2])
            }
        }
    }
}