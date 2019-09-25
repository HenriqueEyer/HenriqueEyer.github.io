//exercicio 1
//Definição que eu já vi de diferença entre eles: -For é muito bom para percorrer um array pq em um array ele possuem um final entao voce delimita um maximo para rodar, o while pode ser usado para manter uma validação de dados, rodar sem parar até a pessoa digitar o dado valido. 

function exer1(){

    let palavra=document.getElementById("entrada").value;
    palavra=palavra.toLowerCase();

    let letras=palavra.split("");
    let i;
    let controle=true;
    let metadepalavra;
    if(letras.length%2==0){
        metadepalavra=(letras.length/2);
    }else{
        metadepalavra=((letras.length+1)/2)
    }
    for(i=0;i<metadepalavra;i++){
        if(letras[i]!=letras[(letras.length-1)-i]){
            controle=false;
        }
    }
    
    let resultado=document.getElementById("lblresultado");
    resultado.innerHTML=controle;
    
}


function exer2(){

    let entrada=document.getElementById("entrada2").value;
    
    let split=entrada.split("");
    
    let maior=split[0];

    let indice=0;

    console.log(split);

    for(i=0;i<split.length;i++){
       if(split[i]>maior){
        maior=split[i];
        indice=i;
       }
    }
    
    let resultado=document.getElementById("lblresultado2");
    resultado.innerHTML="Maior: "+maior+", Indice:"+indice;
    
}

function exer3(){

    let entrada=document.getElementById("entrada3").value;
    
    let split=entrada.split("");
    
    let menor=split[0];

    let indice=0;

    for(i=0;i<split.length;i++){
       if(split[i]<menor){
        menor=split[i];
        indice=i;
       }
    }
    
    let resultado=document.getElementById("lblresultado3");
    resultado.innerHTML="Menor: "+menor+", Indice:"+indice;
    
}

var pessoas=[];

function addnome(){
    let nome=document.getElementById("entradanome").value;
    pessoas.push(nome);
}

function exer4(){
    let vet=pessoas;
    let i;
    maior=vet[0];
    for(i=0;i<vet.length;i++){
        if(vet[i].length > maior.length){
            maior=vet[i];
        }
    }

    let resultado=document.getElementById("lblresultado4");
    resultado.innerHTML="Maior:" + maior;

}

function exer5(){

    let entrada=document.getElementById("entrada5").value;
    
    let split=entrada.split("");
    
    split=split.sort();
    
    let i;

    let qtd=0;
    let maiorrept=0;
    let numrept;
    for(i=0;i<split.length;i++){
        if(split[i]==split[i+1]){
            qtd++;
        }else{
            if(qtd>maiorrept){
                maiorrept=qtd;
                numrept=split[i];
            }
            qtd=0;
        }
        
    }


   
    
    let resultado=document.getElementById("lblresultado5");
    resultado.innerHTML="Numero:"+numrept;
    
}



function exer6(){

    let entrada=document.getElementById("entrada6").value;
    let total=0;
    let i;
    for(i=1;i<=entrada;i++){
        total=total+i;
    }

    let resultado=document.getElementById("lblresultado6");
    resultado.innerHTML="Resultado:" + total;

}

