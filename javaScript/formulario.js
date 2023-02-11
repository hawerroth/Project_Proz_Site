const form = document.getElementById("form");
const campos = document.querySelectorAll("inputUser");
const submit = document.getElementById("submit");

// flag para validar email
let emailInvalid = true;
let nomeInvalid = true;
let cidadeInvalid = true;
let estadoInvalid = true;
let telefoneInvalid = true;

function togglePopup(input, label) {
  // Mostrar popup de campo obrigatório
  input.addEventListener("focus", () => {
    label.classList.add("required-popup");
  });
  // Ocultar popup de campo obrigatório
  input.addEventListener("blur", () => {
    label.classList.remove("required-popup");
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

function validateNome(nome) {
  var regex = /^[a-zA-ZÀ-ÿ\u00C0-\u00FF ]+$/;
  return regex.test(nome);
}

function validateTelefone(telefone) {
  var regex = /^\(\d{2}\)\s\d{5}-\d{4}$|^\(\d{2}\)\s\d{4}-\d{4}$/;
  return regex.test(telefone);
}

function validateEstado(state) {
  const states = [
    "Acre",
    "AC",
    "Alagoas",
    "AL",
    "Amapá",
    "AP",
    "Amazonas",
    "AM",
    "Bahia",
    "BA",
    "Ceará",
    "CE",
    "Distrito Federal",
    "DF",
    "Espírito Santo",
    "ES",
    "Goiás",
    "GO",
    "Maranhão",
    "MA",
    "Mato Grosso",
    "MT",
    "Mato Grosso do Sul",
    "MS",
    "Minas Gerais",
    "MG",
    "Pará",
    "PA",
    "Paraíba",
    "PB",
    "Paraná",
    "PR",
    "Pernambuco",
    "PE",
    "Piauí",
    "PI",
    "Rio de Janeiro",
    "RJ",
    "Rio Grande do Norte",
    "RN",
    "Rio Grande do Sul",
    "RS",
    "Rondônia",
    "RO",
    "Roraima",
    "RR",
    "Santa Catarina",
    "SC",
    "São Paulo",
    "SP",
    "Sergipe",
    "SE",
    "Tocantins",
    "TO",
  ];
  let quantTrue = 0;
  for (let i = 0; i < states.length; i++) {
    if (states[i] == state) {
      quantTrue += 1;
    }
  }
  return quantTrue;
}

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

togglePopup(emailInput, emailLabel);

emailInput.addEventListener("change", (e) => {
  let emailValue = e.target.value;

  if (validateEmail(emailValue) == true){
    // Adicionar estilos dinâmicos se o valor estiver correto
    emailHelper.innerText = " ";
    estilizarInputCorreto(emailInput, emailHelper);

    // trocando da flag para caso o email seja válido
    emailInvalid = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estuiver incorreto
    emailHelper.innerText = "Precisa inserir um email válido";
    estilizarInputIncorreto(emailInput, emailHelper);
    // disable button submit if the input name is incorrect

  }
});

// ------- VALIDAÇÃO NOME --------- //

let nomeInput = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

togglePopup(nomeInput, nomeLabel);

nomeInput.addEventListener("change", (e) => {
  let nomeValue = e.target.value;

  if (validateNome(nomeValue) == true && validateNome(nomeValue).length <= 3) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    nomeHelper.innerText = " ";
    estilizarInputCorreto(nomeInput, nomeHelper);

    nomeInvalid = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver incorreto
    nomeHelper.innerText = "Precisa inserir um nome válido";
    estilizarInputIncorreto(nomeInput, nomeHelper);
  }
});

// ------- VALIDAÇÃO ESTADO --------- //

let estadoInput = document.getElementById("estado");
let estadoLabel = document.querySelector('label[for="estado"]');
let estadoHelper = document.getElementById("estado-helper");

togglePopup(estadoInput, estadoLabel);

// Validar valor do input
estadoInput.addEventListener("change", (e) => {
  let valor = e.target.value;

  if (validateEstado(valor) == 1) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    estadoHelper.innerText = " ";
    estilizarInputCorreto(estadoInput, estadoHelper);

    estadoInvalid = false;
  } else {
    // Adicionar estilos dinâmicos se o valor tiver menos de 3 caracteres
    estadoHelper.innerText = "Precisa inserir um estado válido";
    estilizarInputIncorreto(estadoInput, estadoHelper);
  }
});

// ------- VALIDAÇÃO CIDADE --------- //


let cidadeInput = document.getElementById("cidade");
let cidadeLabel = document.querySelector('label[for="cidade"]');
let cidadeHelper = document.getElementById("cidade-helper");

togglePopup(cidadeInput, cidadeLabel);

cidadeInput.addEventListener("change", (e) => {
  let cidadeValue = e.target.value;

  if (cidadeValue == " " || cidadeValue.length <= 3) {
    // Adicionar estilos dinâmicos se o valor estiver incorreto
    cidadeHelper.innerText = "Precisa inserir um cidade válido";
    estilizarInputIncorreto(cidadeInput, cidadeHelper);

  } else {
    // Adicionar estilos dinâmicos se o valor estiver correto
    cidadeHelper.innerText = "";
    estilizarInputCorreto(cidadeInput, cidadeHelper);

    cidadeInvalid = false;
  }
});

// ------- VALIDAÇÃO TELEFONE --------- //

let telefoneInput = document.getElementById("telefone");
let telefoneLabel = document.querySelector('label[for="telefone"]');
let telefoneHelper = document.getElementById("telefone-helper");

togglePopup(telefoneInput, telefoneLabel);

telefoneInput.addEventListener("change", (e) => {
  let telefoneValue = e.target.value;

  if (validateTelefone(telefoneValue) == true) {
    // Adicionar estilos dinâmicos se o valor estiver correto
    telefoneHelper.innerText = "";
    estilizarInputCorreto(telefoneInput, telefoneHelper);

    telefoneInvalid = false;
  } else {
    // Adicionar estilos dinâmicos se o valor estiver incorreto
    telefoneHelper.innerText = "Precisa inserir um telefone válido";
    estilizarInputIncorreto(telefoneInput, telefoneHelper);
}
});

// Event listener to the submit button
submit.addEventListener("click", (e) => {
  // Prevent the default behavior of the submit button
  e.preventDefault();

  // Check if any of the form fields are invalid
  if (!emailInvalid && !nomeInvalid && !cidadeInvalid && !estadoInvalid && !telefoneInvalid) {
    // If all form fields are valid, submit the form
    form.submit();
  } else {
    // If any form field is invalid, show an alert message to the user
    alert("Por favor, corrija os erros no formulário antes de enviar");
  }
});
