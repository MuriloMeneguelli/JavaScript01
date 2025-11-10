function carregar() {
  var msg = document.getElementById('msg');
  var img = document.getElementById('imagem');

  // Pega a hora atual do sistema
  /*var data = new Date();
  var hora = data.getHours();
*/
var hora = 14
  msg.innerHTML = `Agora são ${hora} horas.`;

  // Define qual imagem será mostrada
  if (hora >= 0 && hora < 12) {
    console.log("manhã");
    img.src = "manhã.jpg";
    document.body.style.background = "#e2cd9f";
  } else if (hora >= 12 && hora < 18) {
    console.log("tarde");
    img.src = "tarde.jpg";
    document.body.style.background = "#b9846f";
  } else {
    console.log("noite");
    img.src = "noite.jpg";
    document.body.style.background = "#515154";
  }
}
