//HEADER
const header= document.createElement("header")
header.innerHTML=' <div id="logo">  <img src="/images/logo_teste_5.png" alt=""></div> <nav> <ul class="menu"> <a href="Homepage.html"><li>Início</li></a> <a href="about.html"><li>Sobre nós</li></a> <a href="projetos.html"><li>Projetos</li></a> <a href="products.html"><li>Produtos</li></a> <a href="formulario.html"><li>Quero Ajudar</li></a> </ul> </nav>'
document.body.appendChild(header)
//FOOTER
 const footer= document.createElement("footer")
footer.innerHTML='<div class="footer-list"> <ul class="text-contact"> <li>Telefone</li> <li>E-mail</li> <li>Endereço</li></ul> <ul class="rede-sociais"> <li> <img src="../images/whatsapp.png" width="25" height="25"> </li> <li> <img src="../images/facebook.png" width="25" height="25"> </li> <li> <img src="../images/instagram.png" width="25" height="25"> </li> </ul> </div> <span> Copyright </span> '
document.body.appendChild(footer)


function setErro(input,message){
  const formControl=input.parentElement;
  const small= formControl.querySelector('small')
  //adicionar menssagem de erro
  small.innerText=message;

  //adicionar classe de erro
  formControl.className= "form-control erro"
}

function setSucesso(input){
    const formControl= input.parentElement
    formControl.className="form-control sucesso"
}

//function validate email

function validateEmail(email) {
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
}

//  function to validate nome

function validateNome(nome) {
  var regex = /^[a-zA-Z\u00C0-\u00FF ]*$/;
  return regex.test(nome);
}

//function validate telefone

function validatePhone(phone) {
  var regex = /^\(\d{2}\)\s\d{5}-\d{4}$|^\(\d{2}\)\s\d{4}-\d{4}$/;
  return regex.test(phone);
}

// Function to hide the alert message
function hiddenAlert(button, alert) {
  button.addEventListener("click", (e) => {
    // Adds the "hidden" class to hide the alert message
    alert.classList.add("hidden");
    // Adds the "hidden" class to hide the alert message
    form.submit();
  });
}

//FORMULÁRIO
const form = document.getElementById("form")
const username = document.getElementById("username")
const phone =document.getElementById("phone")
const email= document.getElementById("email")
const quant= document.getElementById("quantidade")
const product = document.querySelector("#listaProdutos");



form.addEventListener('submit', (e) => {
  // Call a function to check if the inputs are valid
  checkInputs();
  let errorElements = document.getElementsByClassName("form-control erro");
  if (errorElements.length == 0) {
    const alert = document.getElementById("alert");
    const message = document.getElementById("alert-message");
    const button = document.getElementById("alert-button");

    message.innerHTML = `${username.value}, obrigado por realizar sua encomenda! Em breve entraremos em contato.`;
    // Remove the "hidden" class to display the alert
    alert.classList.remove("hidden");

    // Call the function to hide the alert message when the button is clicked
    if (!hiddenAlert(button, alert)){
      // If the function returns false, prevent the form from submitting
      e.preventDefault();
    } else {
      // If the function returns true, proceed with the form submission
      return true;
    }
  } else {
    // If there are elements with the "form-control erro" class, prevent the form from submitting
    e.preventDefault();/* não recarregará a imagem imediatamente*/
    return false;
  };
})



function checkInputs(){
    const usernameValue= username.value;
    const phoneValue= phone.value;
    const emailValue =email.value;
    const quantValue = quant.value;
    const productValue = product.value;


    if (usernameValue == ""){
        setErro(username,'Este campo é obrigatório')
    } else if(validateNome(usernameValue)  == false || usernameValue.length<3) {
        setErro(username,'Por favor digite um nome válido')
    } else{
        setSucesso(username)
    }

    if(emailValue==""){
      setErro(email,'Este campo é obrigatório')
    }else if (validateEmail(emailValue) == false){
      setErro(email,"Precisa inserir um email válido que contenha o '.com ou .br'.");
    } else{
      setSucesso(email)
    }

    if (phoneValue == ""){
      setErro(phone,'Este campo é obrigatório')
  } else if(validatePhone(phoneValue)  == false) {
      setErro(phone,'Por favor digite o telefone como o exemplo')
  } else{
      setSucesso(phone)
  }


    if(productValue == "0"){
      setErro(product,'Este campo é obrigatório')
      product.style.borderColor = "red";
    }else{
      setSucesso(product)
      product.style.borderColor = "greenyellow";
    }

    if (quantValue<=0){
        setErro(quant,'Por favor coloque a quantidade desejada')
    } else{
      setSucesso(quant)
    }

}

// BOTÃO
let botaoJS = window.document.getElementById("botão");
let buttonWidth = botaoJS.offsetWidth;
let buttonHeight = botaoJS.offsetHeight;

botaoJS.onmouseover = function() {
    botaoJS.style.width= buttonWidth * 1.01 + "px";
    botaoJS.style.height= buttonHeight * 1.01 + "px";
    botaoJS.style.backgroundColor="#84D2C5";
}
 botaoJS.onmouseout = function(){
    botaoJS.style.width = buttonWidth /1.0 +"px";
    botaoJS.style.height= buttonHeight /1.0 +"px";
    botaoJS.style.backgroundColor="#d7f2e9";
 }
