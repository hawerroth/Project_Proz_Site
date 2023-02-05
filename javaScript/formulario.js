let nomeInput  = document.getElementById("nome");
let nomeLabel = document.querySelector('label[for="nome"]');
let nomeHelper = document.getElementById("nome-helper");

// Mostrar popup de campo obrigatório
nomeInput.addEventListener("focus", function (evento) {
    nomeLabel.classList.add("required-popup");
});

// Ocultar popup de campo obrigatório
nomeInput.addEventListener("blur", function (evento) {
    nomeLabel.classList.remove("required-popup");
});

//validar valor do input
nomeInput.addEventListener("change", (evento)=>{
    let valueInput = evento.target.value;

    if(valueInput.leng < 3){
        console.log("Nome Inválido");
        nomeInput.classList.add("error");
        nomeHelper.innerHTML = "Nome Inválido, Precisa ter no mínimo 4 Caracteres";  
        nomeHelper.style.display = "block";
    }
});
