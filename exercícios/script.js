function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = newDate()
    //var hora = data.getHours()
    var hora = 8
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.scr = 'Manhã.png'
    } else if (hora >= 12 && hora < 18) {
        img.scr = 'Tarde.png'
    } else {
        img.scr = 'Noite.png'
    }
}