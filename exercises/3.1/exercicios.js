//Exercicio1
function operadores(a,b){
    console.log("Soma:"+(a+b));
    console.log("Subtração:"+(a-b));
    console.log("Multiplicação:"+(a*b));
    console.log("Divisão:"+(a/b));
    console.log("Módulo:"+(a%b));
    }

//Exercicio2
function Maiornum(a,b){
    if(a>b){
        console.log(a);
    }else{
        console.log(b);
    }
    }

//Exercicio3
function maiornum3(a,b,c){
if(a>b && a>c){
    console.log(a);
}else if (b>c){
    console.log(b)
}else{
    console.log(c)
}
    }

//Exercicio4
function pos_neg(num){
    (num>=0) ? console.log("Positivo"):console.log("negativo");
    }

//Exercicio5
function angulo(ang1,ang2,ang3){
    let angulovalido=false;
    
    do{
    ((ang1>0 && ang2>0 && ang3>0))?angulovalido=true:console.log("Os angulos precisam serem validos");
    }while(angulovalido!=true)
    
    ((ang1+ang2+ang3)==180)?controle=true:controle=false;
    
    controle?console.log(controle):console.log("N eh um triangulo");
    }

//Exercicio6
function xadrez(peca){
    peca=peca.toUpperCase();
    
    switch(peca){
        case "RAINHA":console.log("Diagonal,Vertical e Horizontal");
            break;
        case "TORRE":console.log("Horizontal e vertical");
            break;
        case "PEAO":console.log("Apenas horizontal pra frente, apenas uma casa por vez e duas se for o primeiro ovimento dele.");
            break;
        case "BISPO":console.log("Apenas Diagonais");
            break;
        case "CAVALO":console.log("Sempre em L");
            break;  
        case "REI":console.log("Todas as direçoes mas apenas uma casa");
            break;
        default : console.log("DIgite um valor valido");
            break;         
    }
    }

//Exercicio7
function notas(nota){
    if(nota>=90){
        console.log("A");
    }else if(nota>=80){
        console.log("B");
    }else if(nota>=70){
        console.log("C");
    }else if(nota>=0){
        console.log("D");
    }else if(nota>=40){
        console.log("E");
    }else {
        console.log("F");
    }
    }

//Exercicio8
function somapar(a,b,c){
    let vari;
    vari=((a+b+c)%2==0)?true:false;
    console.log(vari);
    }

//Exercicio9
function somaimpar(a,b,c){
    let vari;
    vari=((a+b+c)%2==0)?false:true;
    console.log(vari);
    }

//Exercicio10
function lucro(valor_venda,custo){
    let lucro_peca=valor_venda-custo;
    console.log((1000*(lucro_peca*0.8)));
    }

//Exercicio11
function salario(bruto){
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
     brutoinss=bruto-inss;
    if(brutoinss<=1903.94){
        ir=0;
    }else if(brutoinss<=2826.65){
        ir=brutoinss*0.075-142.80;
    }else if(brutoinss<=3751.05){
        ir=brutoinss*0.15-354.80;
    }else if(brutoinss<=4664.68){
        ir=brutoinss*0.225-636.13;
    }else{
        inss=brutoinss*0.275-869.36;
    }
    
    console.log(brutoinss-ir);
    }