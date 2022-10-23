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