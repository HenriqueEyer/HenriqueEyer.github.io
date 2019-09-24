function angulo(ang1,ang2,ang3){
let angulovalido=false;

do{
((ang1>0 && ang2>0 && ang3>0))?angulovalido=true:console.log("Os angulos precisam serem validos");
}while(angulovalido!=true)

((ang1+ang2+ang3)==180)?controle=true:controle=false;

controle?console.log(controle):console.log("N eh um triangulo");
}