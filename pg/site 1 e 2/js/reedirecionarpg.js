function logar(){

var login = document.getElementById('login').value;
var senha = document.getElementById('senha').value;

if(login == 'adm' && senha == 'adm') {
    location.href = '../pg/home.html';
}else{
    alert('usuario ou senha incorretos');
}
}