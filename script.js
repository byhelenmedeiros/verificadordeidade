function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')

    if (fano.value.length == 0 || fano.value > ano){
        alert('Erro! Verifique os dados digitados e tente novamente.')
} else{
        var fsex = document.getElementsByName("radsex")
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement("img")
        
            img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            genero = "homem"
        if (idade >=0 && idade < 10 ){
            //criança
            img.setAttribute('src', 'crianca-h.png')

        } else if(idade < 21){
            //jovem
            img.setAttribute('src', 'adolescente-h.png')
        } else if(idade < 50){
            //adulto
            img.setAttribute('src', 'adulto-h.png')
        }else{
            //idoso
            img.setAttribute('src', 'idoso-h.png')
        }



        } else if(fsex[1].checked){
            genero = "mulher";
            if (idade >=0 && idade < 10 ){
                //criança
                img.setAttribute('src', 'crianca-m.png');
            } else if(idade < 21){
                //jovem
                img.setAttribute('src', 'adolescente-m.png');
            } else if(idade < 50){
                //adulto
                img.setAttribute('src', 'adulto-m.png');
            } else{
                //idoso
                img.setAttribute('src', 'idoso-m.png');
            }
        }
        
            res.innerHTML = `Olá! Detectamos que é ${genero} e tem ${idade} anos.`
            res.appendChild(img)
            res.style.fontSize = "14px"
            res.style.padding = "10px"
            res.style.color = "#473b4e"


    }
}
