

function FocarNoEmail(){
    document.getElementById("emailformulario").focus();
}
function FocarNaSenha(){
    document.getElementById("senhapas").focus();
}
function SenhaEstaPreenchida() {
    return document.getElementById("senhapas").value
}
function EmailEstaPreenchido() {
    return document.getElementById("emailformulario").value
}
function Redirecionar() {
    if (CamposDePreenchimentoValidos()) {
        alert("Tudo ok, deveria redirecionar!")
    }
}
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