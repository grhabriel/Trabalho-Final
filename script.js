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
        texto.innerHTML = "Experimente nosso delicioso café com raspa de canela em pau! Já disponível em todas as nossas unidades. Aproveite a promoção e não perca tempo!";
    }
    else{
        texto.innerHTML = "Novos grãos e novos cafés já estão disponíveis em nossas lojas, não deixe de conferir! Aproveite e peça aquele cappuccino delicioso que só nós temos!";
    }
                //   bannner/banner0.jpg ou bannner/banner1.jpg
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