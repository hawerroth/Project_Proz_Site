let cardsProjeto = document.querySelectorAll('.projeto-card');
console.log (cardsProjeto);


for (let i = 0 ; i < cardsProjeto.length; i++) {
    cardsProjeto[i].addEventListener("mouseover", (e) => {
    cardsProjeto[i].style.backgroundColor = "#84D2C5"

});
}

for (let i = 0 ; i < cardsProjeto.length; i++) {
    cardsProjeto[i].addEventListener("mouseout", (e) => {
    cardsProjeto[i].style.backgroundColor = "#d7f2e9"

});
}