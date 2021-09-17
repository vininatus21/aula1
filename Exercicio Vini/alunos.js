function novosalunos(Nome, idade, Curso, CPF) {
    this.Nome = Nome
    this.idade = idade
    this.Curso = Curso
    this.CPF = CPF
    this.Estudar = function() {
        alert("vai estudar")
    }
}


var aluno1 = new novosalunos("Vinícius", "19", "Analise e Desenvolvimento de Sistemas", "12345678900")
var aluno2 = new novosalunos("Rodrigo", "27", "Educação Fisica", "12345678901")
var aluno3 = new novosalunos("Stefani", "30", "Educação Fisica", "12345678902")