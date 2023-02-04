const form = document.getElementById('form')
const campos = document.querySelectorAll('inputUser')

function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
}

function estilizarInputCorreto(input, helper) {
  helper.classList.remove("visible");
  input.classList.remove("error");
  input.classList.add("correct");
}

function estilizarInputIncorreto(input, helper) {
  helper.classList.add("visible");
  input.classList.add("error");
  input.classList.remove("correct");
}
function validateEmail(email) {
  var regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  return regex.test(email);
}

function validateNome(nome){
  var regex = /^[a-zA-Z\u00C0-\u00FF ]*$/;
  return regex.test(nome);
}
 
function validateTelefone(telefone){
var regex = /^\(\d{2}\)\s\d{5}-\d{4}$|^\(\d{2}\)\s\d{4}-\d{4}$/;
  return regex.test(telefone);
}
// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel)

emailInput.addEventListener("change", (e)=> {
  let emailValue = e.target.value

  if(validateEmail(emailValue) == true){
    // Adicionar estilos dinâmicos se o valor estiver correto
    emailHelper.innerText = " ";
    estilizarInputCorreto(emailInput, emailHelper);
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
  }
})

// ------- VALIDAÇÃO NOME --------- //

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel)

nomeInput.addEventListener("change", (e)=> {
  let nomeValue = e.target.value

  if(nomeValue==" "){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    nomeHelper.innerText= "Precisa inserir um nome válido";
    estilizarInputIncorreto(nomeInput, nomeHelper);
  } else if (validateNome(nomeValue)==false|| nomeValue.length<=3){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    nomeHelper.innerText="Precisa inserir um nome válido";
    estilizarInputIncorreto(nomeInput, nomeHelper);
  } else {
   // Adicionar estilos dinâmicos se o valor estiver correto
    nomeHelper.innerText="";
    estilizarInputCorreto(nomeInput,nomeHelper);
  }
})
  
// ------- VALIDAÇÃO ESTADO --------- //

let estadoInput = document.getElementById("estado");
let estadoLabel = document.querySelector('label[for="estado"]');
let estadoHelper = document.getElementById("estado-helper");

togglePopup(estadoInput, estadoLabel)

estadoInput.addEventListener("change", (e)=> {
  let estadoValue = e.target.value

  if(estadoValue==" "){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    estadoHelper.innerText= "Precisa inserir um estado válido";
    estilizarInputIncorreto(estadoInput, estadoHelper);
  } else {
   // Adicionar estilos dinâmicos se o valor estiver correto
   estadoHelper.innerText= ""; 
   estilizarInputCorreto(estadoInput,estadoHelper);
  }
})

// ------- VALIDAÇÃO CIDADE --------- //

let cidadeInput = document.getElementById("cidade");
let cidadeLabel = document.querySelector('label[for="cidade"]');
let cidadeHelper = document.getElementById("cidade-helper");

togglePopup(cidadeInput, cidadeLabel)

cidadeInput.addEventListener("change", (e)=> {
  let cidadeValue = e.target.value

  if(cidadeValue==" " || cidadeValue.length<=3){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    cidadeHelper.innerText= "Precisa inserir um cidade válido";
    estilizarInputIncorreto(cidadeInput, cidadeHelper);
  } else {
   // Adicionar estilos dinâmicos se o valor estiver correto
   cidadeHelper.innerText= "";
    estilizarInputCorreto(cidadeInput,cidadeHelper);
  }
})

// ------- VALIDAÇÃO TELEFONE --------- //

let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

togglePopup(telefoneInput, telefoneLabel)

telefoneInput.addEventListener("change", (e)=> {
  let telefoneValue = e.target.value

  if(telefoneValue==" "){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    telefoneHelper.innerText= "Precisa inserir um telefone válido";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
  } else if (validateTelefone(telefoneValue)==false){
  // Adicionar estilos dinâmicos se o valor estiver incorreto
    telefoneHelper.innerText="Precisa inserir um telefone válido";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
  } else {
   // Adicionar estilos dinâmicos se o valor estiver correto
    telefoneHelper.innerText="";
    estilizarInputCorreto(telefoneInput,telefoneHelper);
  }
})