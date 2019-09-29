var sol=document.getElementById('solution');

function solucao(result){
    sol.innerHTML=result;
}
function square(num){
        
    solucao(num*num);
    return num*num;
}
function half(num){
    solucao("Metade de "+num+" é "+(num/2))
    return num/2
}
function porc(num1,num2){
    let porcentagem;
    porcentagem=(num1/num2)*100;
    solucao(num1+" é "+porcentagem+" de "+num2)
    return porcentagem
}

function area(num){
    let pi=3.14
    let circulo=pi*(num*num);

    solucao("A area do circulo de raio "+num+" é: "+circulo);

    return circulo

}

var entradas=document.getElementsByTagName('input');
var botoes=document.getElementsByTagName('button');

botoes[0].addEventListener('click', function(){
    square(entradas[0].value);
});
botoes[1].addEventListener('click', function(){
    half(entradas[1].value)
});
botoes[2].addEventListener('click', function(){
     porc(entradas[2].value,entradas[3].value)
    });
botoes[3].addEventListener('click', function(){
     area(entradas[4].value)
    });

function all(num){
    var a=half(num);
    var b=square(a);
    solucao(porc(area(b),square(b)))
}
