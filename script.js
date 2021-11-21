let bannerImg = document.querySelector(".banner img ");

let botao = document.querySelector('.banner span p');
let botaoEsquerda = document.getElementById('esquerda');
let cont = 1;
let texto = document.querySelector('p#mensagem');

// Banner mover
botao.addEventListener('click',clicar);
botaoEsquerda.addEventListener('click',clicar);

function clicar(){
    cont++;
    if(cont%2==1){
        texto.innerHTML = "Experimente nosso delicioso café com pitadas de canela";
    }
    else{
        texto.innerHTML = "Temos novos cafes disponiveis! Corra e não perca esta oportunidade! Por tempo ilimitado"
    }
                //   bannner/banner0.jpg
    let banner = `bannner/banner${cont%2}.jpg`;
    console.log(cont%2)
    bannerImg.setAttribute('src',banner);
}



//Mouse entra na imagem
texto.addEventListener('mouseover',aparecerTexto);
bannerImg.addEventListener('mouseover',aparecerTexto);
bannerImg.addEventListener('mouseout',desaparecerTexto);

function aparecerTexto(){
    texto.setAttribute('class','mouseEmcima');
}
function desaparecerTexto(){
    texto.removeAttribute('class');
}   