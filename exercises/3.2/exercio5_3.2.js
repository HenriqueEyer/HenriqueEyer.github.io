
let c;
let primo=13598799;
let controleP=0;
let metadeprimo=(primo-1)/2;

if(primo==2){
    console.log(primo+" eh primo");  
}else if(primo%2==0){
    console.log(primo+" n eh primo")
}else{
    for(c=1;c<=metadeprimo;c++){
        if(primo%c==0){
            controleP=1;
        }
    }
    if(controleP==1){
        console.log(primo+" n eh primo");
    }else{
        console.log(primo+ " eh primo");
    }
}
