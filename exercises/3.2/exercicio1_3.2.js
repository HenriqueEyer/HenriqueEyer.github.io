let n=5;
let i;
let asr='*';
for(i=0;i<n;i++){
    asr= asr+'*';
}
for(i=0;i<n;i++){
    console.log(asr);
}

console.log();


let asr2='*';

for(i=0;i<n;i++){
    console.log(asr2);
    asr2= asr2+'*';
}

console.log();

let asr3='';
let j;
let controle=n;

for(i=0;i<n;i++){
    for(j=1;j<=n;j++){
        if(j<controle){
            asr3=asr3+' ';
        }else{
            asr3=asr3+'*';
        }
    }
    console.log(asr3);
    asr3='';
    controle--;
}

console.log();

let asr4='';

let controle2=(n+1)/2;
let controlemais=controle2;
let controlemenos=controle2;

for(i=0;i<=controle2;i++){
    for(j=1;j<=n;j++){
        if(j>controlemenos && j<controlemais ){
            asr4=asr4+'*';
        }else{
            asr4=asr4+' ';
        }
       
    }
    console.log(asr4);
    asr4='';
    controlemenos--;
    controlemais++;
}

let c;
let primo=29;
let controleP=0;
let metadeprimo=(primo-1)/2;

if(primo==2){
    console.log(primo+" eh primo");  
}else if(primo%2==0){
    console.log(primo+" n eh primo")
}else{
    for(c=1;controleP!=1 || c<=metadeprimo;c+2){
        if(primo%c==0){
            controleP=1;
        }
    }
    if(controleP==1){
        console.log(primo+" eh primo");
    }else{
        console.log(primo+ " n eh primo");
    }
}
