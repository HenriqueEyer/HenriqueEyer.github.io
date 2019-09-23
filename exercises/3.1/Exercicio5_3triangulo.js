
let ang1;
let ang2;
let ang3;

let controle;
let angulovalido=false;

do{

    ang1=94;
    ang2=5;
    ang3=81;


((ang1>0 && ang2>0 && ang3>0) )?angulovalido=true:console.log("Os angulos precisam serem validos");

}while(angulovalido!=true)

((ang1+ang2+ang3)==180)?controle=true:controle=false;

controle?console.log(controle):console.log("N eh um triangulo");