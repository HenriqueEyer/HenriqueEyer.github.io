var romanos={
    I:1,
    V:5,
    X:10,
    L:50,
    C:100,
    D:500,
    M:1000
};

let roma="MMMDLXIII";
let separado=roma.split("");
let vet=[];
let c=0;
let total=0;

console.log(separado);

for(cont of separado){
    vet[c]=romanos[cont];
    c++;
}
c=0;
console.log(vet)
for(c=0;c<vet.length;c++){

    if(vet[c]<vet[c+1]){
        vet[c+1]=vet[c+1]-vet[c];
    }else{
        total+=vet[c];
    }
}
console.log(total)