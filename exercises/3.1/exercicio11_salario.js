let bruto=4000.00;
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