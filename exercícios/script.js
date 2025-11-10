function carregar() { 
      alert("O JavaScript foi carregado com sucesso!")

    var msg = document.getElementById('msg')
    var img = document.getElementById('foto')
    var hora = 21
 
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src = 'excercícios/Manhã.jpg'
       
    } else if (hora >= 12 && hora < 18) {
        img.src = 'exercícios/Tarde.jpg'
        document.body.style.background ='#222613'
        
    } else {
        img.src = 'exercícios/Noite.jpg'
        
    }
}

