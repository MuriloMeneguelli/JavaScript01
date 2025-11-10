function carregar() { 
    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 21
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'Manhã.jpg'
       
    } else if (hora >= 12 && hora < 18) {
        img.src = 'Tarde.jpg'
        document.body.style.background ='#222613'
        
    } else {
        img.src = 'Noite.jpg'
        
    }
}

