//HEADER
const header= document.createElement("header")
header.innerHTML=' <div id="logo">  <img src="/images/logo_teste_5.png" alt=""></div> <nav> <ul class="menu"> <a href="Homepage.html"><li>Início</li></a> <a href="about.html"><li>Sobre nós</li></a> <a href="projetos.html"><li>Projetos</li></a> <a href="products.html"><li>Produtos</li></a> <a href="formulario.html"><li>Quero Ajudar</li></a> </ul> </nav>'
document.body.appendChild(header)
//FOOTER
 const footer= document.createElement("footer")
footer.innerHTML='<div class="footer-list"> <ul class="text-contact"> <li>Telefone</li> <li>E-mail</li> <li>Endereço</li></ul> <ul class="rede-sociais"> <li> <img src="../images/whatsapp.png" width="25" height="25"> </li> <li> <img src="../images/facebook.png" width="25" height="25"> </li> <li> <img src="../images/instagram.png" width="25" height="25"> </li> </ul> </div> <span> Copyright </span> '
document.body.appendChild(footer)


//FORMULÁRIO
const form = document.getElementById("form")
const username = document.getElementById("username")
const phone =document.getElementById("phone")
const email= document.getElementById("email")
const quant= document.getElementById("quantidade")

form.addEventListener('submit',(e) => {
    e.preventDefault();//não recarregará a imagem imediatamente
    checkInputs();
});
function checkInputs(){
    const usernameValue= username.value;
    const phoneValue= phone.value;
    const emailValue =email.value;
    const quantValue = quant.value;


    if (usernameValue == ""){
        setErro(username,'Este campo é obrigatório')
    } else if (usernameValue.length<3){
        setErro(username,'Por favor digite um nome válido')
    } else{
        setSucesso(username)
    }

        if(emailValue==""){
            setErro(email,'Este campo é obrigatório')
        } else{
            setSucesso(email)
        }

            if(phoneValue==""){
                setErro(phone,'Este campo é obrigatório')
            }else{
                setSucesso(phone)}

                if (quantValue<=0){
                    setErro(quant,'Por favor coloque a quantidade desejada')
                } else{
                    setSucesso(quant)
                }
    
}
 
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