let vetverbos=[' foi comprar ',' jogou fora ',' estava pensando no ',' esqueceu do ',' comeu todo ',' trouxe para '];

var substantivo=document.getElementById('noun')

var adjetivo=document.getElementById('adjective')
var nome=document.getElementById('person')

var div1=document.getElementById('story')


var but=document.getElementById('lib-button');
console.log(but);
console.log(substantivo);
console.log(adjetivo);
console.log(nome);
console.log(div1);



but.addEventListener('click', function(){
    let str;
    num=Math.floor(Math.random() * vetverbos.length);
    console.log(num)
    if(substantivo.value !=undefined && adjetivo.value !=undefined && nome.value !=undefined){
    str=nome.value + vetverbos[num] + substantivo.value + " " +adjetivo.value;
    
    }else{
    str="Complete todos os campos"
    }
    div1.innerHTML=str;
})

