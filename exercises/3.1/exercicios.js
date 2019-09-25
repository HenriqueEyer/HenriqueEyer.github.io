//Exercicio1


function Exercicio(num,elementos){
    

    let a;
    let b;
    let c;

    if(elementos==1){
        a=document.getElementById("Input1_ex"+num).value;
    }else if (elementos==2) {
        a=document.getElementById("Input1_ex"+num).value;
        b=document.getElementById("Input2_ex"+num).value;
    }else{
        a=document.getElementById("Input1_ex"+num).value;
        b=document.getElementById("Input2_ex"+num).value;
        c=document.getElementById("Input3_ex"+num).value;
    }


    switch(num){
        case 1:operadores(a,b,num);
            break;
        case 2:Maiornum(a,b,num);
            break;
        case 3:maiornum3(a,b,c,num);
            break;
        case 4:pos_neg(a,num);
            break;
        case 5:angulo(a,b,c,num);
            break;
        case 6:xadrez(a,num);
            break;
        case 7:notas(a,num);
            break;
        case 8:somapar(a,b,c,num);
            break;
        case 9:somaimpar(a,b,c,num);
            break;
        case 10:lucro(a,b,num);
            break;    
        case 11:salario(a,num);
            break;       
    }


}


function operadores(a,b,num){
    let rest="Soma: "+(a+b)+"\n"+"Subtração:"+(a-b)+"\n"+"Multiplicação:"+(a*b)+"\n"+"Divisão:"+(a/b)+"\n"+"Resto:"+(a%b);
    resposta(rest,num);
    }

//Exercicio2
function Maiornum(a,b,num){
    if(a>b){
        resposta(a,num);
    }else{
        resposta(b,num);
    }
    }

//Exercicio3
function maiornum3(a,b,c,num){
if(a>b && a>c){
    resposta(a,num);
}else if (b>c){
    resposta(b,num);
}else{
    resposta(c,num);
}
    }

//Exercicio4
function pos_neg(num,num2){
    (num>=0)?resposta('Positivo',num2):resposta('negativo',num2);
    }

//Exercicio5
function angulo(ang1,ang2,ang3,num){
    let angulovalido=false;
     
    ((ang1+ang2+ang3)==180)?controle=true:controle=false;
    
    controle?resposta(controle,num):resposta("N eh um triangulo",num);
    }

//Exercicio6
function xadrez(peca,num){
    peca=peca.toUpperCase();
    
    switch(peca){
        case "RAINHA":resposta("Diagonal,Vertical e Horizontal",num);
            break;
        case "TORRE":resposta("Horizontal e vertical",num);
            break;
        case "PEAO":resposta("Apenas horizontal pra frente, apenas uma casa por vez e duas se for o primeiro ovimento dele.",num);
            break;
        case "BISPO":resposta("Apenas Diagonais",num);
            break;
        case "CAVALO":resposta("Sempre em L",num);
            break;  
        case "REI":resposta("Todas as direçoes mas apenas uma casa",num);
            break;
        default : resposta("DIgite um valor valido",num);
            break;         
    }
    }

//Exercicio7
function notas(nota,num){
    if(nota>=90){
        resposta("A",num);
    }else if(nota>=80){
        resposta("B",num);
    }else if(nota>=70){
        resposta("C",num);
    }else if(nota>=0){
        resposta("D",num);
    }else if(nota>=40){
        resposta("E",num);
    }else {
        resposta("F",num);
    }
    }

//Exercicio8
function somapar(a,b,c,num){
    let vari;
    
    
    if((a%2==0 || b%2==0 || c%2==0)){
        vari=true;
    }else{
        vari=false;
        }
    resposta(vari,num);
}
    
    

//Exercicio9
function somaimpar(a,b,c,num){
    let vari;
    
    
    if((a%2!=0 || b%2!=0 || c%2!=0)){
        vari=true;
    }else{
        vari=false;
    }
    resposta(vari,num);
}

//Exercicio10
function lucro(valor_venda,custo,num){
    let lucro_peca=valor_venda-custo;
    resposta((1000*(lucro_peca*0.8)),num);
    }

//Exercicio11
function salario(bruto,num){
    let inss;
    let ir;
    if(bruto<=1556.94){
        inss=bruto*0.08;
    }else if(bruto<=2594.92){
        inss=bruto*0.09;
    }else if(bruto<=5189.82){
        inss=bruto*0.11;
    }else{
        inss=570.88;
    }
    let brutoinss=bruto-inss;
    if(brutoinss<=1903.94){
        ir=0;
    }else if(brutoinss<=2826.65){
        ir=brutoinss*0.075-142.80;
    }else if(brutoinss<=3751.05){
        ir=brutoinss*0.15-354.80;
    }else if(brutoinss<=4664.68){
        ir=brutoinss*0.225-636.13;
    }else{
        ir=brutoinss*0.275-869.36;
    }
    
    resposta((brutoinss-ir),num);
    }

function resposta(resp,num){
    
    document.getElementById("exe"+num+"rst").innerHTML=resp;
}
    