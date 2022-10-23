/* aqui é o código para dar alert quando a pessoa preencher o formulário */ 

function validate ()
{
var username=document.getElementById("username").nodeValue;
var password=document.getElementById("password").nodeValue;

if(username=="admin"&& password=="user")

{
     alert("login succesfuly");
     return false;
}
else
{
     alert("login efetuado");
}

}