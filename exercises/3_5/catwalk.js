var imagem=document.querySelector('img');
imagem.style.left='0px';

var tam= window.innerWidth;
num=0;
let qtd=0;
let c=0;

function catWalk(){
    
    if(tam<parseInt(imagem.style.left)){
        c=1;
    }
    if(qtd==0){
        c=0;
    }
    if(c==0){
        imagem.style.left =(parseInt(imagem.style.left)+10)+'px';
        qtd++;
    }
    if(c==1){
        imagem.style.left =(parseInt(imagem.style.left)-10)+'px';
        qtd--;
    }
}
window.setInterval(catWalk, 50);

