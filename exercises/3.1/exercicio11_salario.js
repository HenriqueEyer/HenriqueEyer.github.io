let bruto=2500.00;
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

if(bruto<=1903.94){
    ir=0;
}else if(bruto<=2826.65){
    ir=bruto*0.075-142.80;
}else if(bruto<=3751.05){
    ir=bruto*0.15-354.80;
}else if(bruto<=4664.68){
    ir=bruto*0.5-636.13;
}else{
    inss=570.88;
}