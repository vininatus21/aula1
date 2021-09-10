function Redirecionar() {
    if (CamposDePreenchimentoValidos()) {
        alert("Tudo ok, deveria redirecionar!")
    }
}
//funcao sem retorno
function FocarNoEmail(){
    document.getElementById("emailformulario").focus();
}
//funcao sem retorno
function FocarNaSenha(){
    document.getElementById("senhapas").focus();
}
//funcao com retorno do tipo boolean(true ou false)
function SenhaEstaPreenchida() {
    var resultadoSenha =  document.getElementById("senhapas").value.length > 0;
    return resultadoSenha;
}
//funcao com retorno do tipo boolean(true ou false)
function EmailEstaPreenchido() {
    var resultadoemail = document.getElementById("emailformulario").value.length > 0;
    return resultadoemail;
}
//funcao com retorno do tipo boolean(true ou false) 
function CamposDePreenchimentoValidos(){
    var emailPreenchido = EmailEstaPreenchido();
    var senhaPreenchida = SenhaEstaPreenchida();
    if(!emailPreenchido){
        alert("Email deve ser preenchido");
        FocarNoEmail();
        return false;
    }
    if(!senhaPreenchida){
        FocarNaSenha();
        alert("Senha deve ser preenchida!");
        return false;
    }
    return true;
}