const header= document.createElement("header")
header.innerHTML=' <div id="logo">  <img src="/images/logo_teste_5.png" alt=""></div> <nav> <ul class="menu"> <a href="Homepage.html"><li>Início</li></a> <a href="about.html"><li>Sobre nós</li></a> <a href="projetos.html"><li>Projetos</li></a> <a href="products.html"><li>Produtos</li></a> <a href="formulario.html"><li>Quero Ajudar</li></a> </ul> </nav>'
document.body.appendChild(header)

 const footer= document.createElement("footer")
footer.innerHTML='<div class="footer-list"> <ul class="text-contact"> <li>Telefone</li> <li>E-mail</li> <li>Endereço</li></ul> <ul class="rede-sociais"> <li> <img src="../images/whatsapp.png" width="25" height="25"> </li> <li> <img src="../images/facebook.png" width="25" height="25"> </li> <li> <img src="../images/instagram.png" width="25" height="25"> </li> </ul> </div> <span> Copyright </span> '
document.body.appendChild(footer)

