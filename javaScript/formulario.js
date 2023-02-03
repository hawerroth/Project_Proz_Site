const form = document.getElementById('form')
const campos = document.querySelectorAll('inputUser')
 
function validarEmail(inputText)
{
var formatoEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(formatoEmail))
{
alert("Valid email address!");
document.form1.text1.focus();
return true;
}
else
{
alert("You have entered an invalid email address!");
document.form1.text1.focus();
return false;
}

}