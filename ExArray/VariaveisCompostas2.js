var nomes = ["Vinícius", "Flávia"]
nomes.push("Vitor", "Rafaela")
nomes.push("Rodrigo", "Stefani")
console.log(nomes)
nomes.sort()
for (var pos = 0; pos < nomes.length; pos++) {
    console.log(nomes[pos])
}
console.log(`O ${nomes[2]} está casado com a ${nomes[3]}`)