let botaoJS = window.document.getElementById("botão");
let buttonWidth = botaoJS.offsetWidth;
let buttonHeight = botaoJS.offsetHeight;

botaoJS.onmouseover = function() {
    botaoJS.style.width= buttonWidth * 1.03 + "px";
    botaoJS.style.height= buttonHeight * 1.03 + "px";
    botaoJS.style.backgroundColor="#84D2C5";
}
 botaoJS.onmouseout = function(){
    botaoJS.style.width = buttonWidth /1.0 +"px";
    botaoJS.style.height= buttonHeight /1.0 +"px";
    botaoJS.style.backgroundColor="#d7f2e9";
 }