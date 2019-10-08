get_btn_difficult()
restart_game()
var cor
var score=[];

function init_ALL(size_color){
put_colors(size_color);
cor=set_chosen_color(size_color);
add_txt_cor(cor);
add_event_click_in_colors();
show_score();
}


function add_pontuacao_vetor(acerto){
    if(score.length<=2){
        if(acerto){
            score.push(3);
        }else{
            score.push(-1);
        }
    }else{
        let sum=score[score.length-1]+score[score.length-2]
        if(acerto){
            if(sum>=6){
                score.push(4);
            }else{
                score.push(3);
            }
        }else{
            if(sum<=-2){
                score.push(-2);
            }else{
                score.push(-1)
            }
        }
    }
    show_score();
}

function show_score(){
    let getscore=document.getElementById('score');
    getscore.innerHTML=update_score();
}

function update_score(){
    let i;
    let total=0;
    for(i=0;i<score.length;i++){
        total+=score[i];
    }
    if(total<1){
        total=0;
    }
    return total;
}

function generate_new_colors(size_color){
    
    put_colors(size_color);
    cor=set_chosen_color(size_color);
    add_txt_cor(cor);
    desmarcar_cores();
}


function add_event_click_in_colors(){
    let cores=document.getElementsByClassName('cores');
    let i;
    for(i=0;i<cores.length;i++){
        click_resposta(cores[i],cores.length)//Função que adiciona o evento de click
    }
}

function desmarcar_cores(){
    let cores=document.getElementsByClassName('cores');
    let i;
    for(i=0;i<cores.length;i++){
        desmarcar_click(cores[i])
    }
}

function marcar_click(elemento){
    elemento.style.border="2px solid blue"
}


function desmarcar_click(elemento){
    elemento.style.border="";
}


function click_resposta(elemento,size_color){
    elemento.addEventListener('click', function (){
        desmarcar_cores();
        let cor_selecionada=return_color_element(this);
        let resposta=verify_Response(cor_selecionada,cor);
        change_txt_response(resposta,size_color)
        marcar_click(this);
    })
}

function return_color_element(elemento){
    return elemento.style.backgroundColor;
}

function verify_Response(clicado,resposta_certa){
    if(clicado==resposta_certa){
        add_pontuacao_vetor(true);
        return true;
    }else{
        add_pontuacao_vetor(false);
        return false
    }
}

function zera_init_txt(){
    let txt_rsp=document.getElementById('resposta');
    let txt_color=document.getElementById('txt_cor')
    txt_rsp.innerHTML=""
    txt_color.innerHTML=""
}

function return_init_txt(){
    let txt_rsp=document.getElementById('resposta');
    txt_rsp.innerHTML="Escolha uma cor"
}

function change_txt_response(acertou,size_color){
    let txt_rsp=document.getElementById('resposta');
    if(acertou){
        txt_rsp.innerHTML="Acertou! Novas cores!"
        generate_new_colors(size_color)
    }else{
        txt_rsp.innerHTML="Errou, tente novamente"
    }
}

function add_txt_cor(txt_cor){
    let txt=document.getElementById('txt_cor');
    txt_cor=txt_cor.substring(3);
    txt.innerText=txt_cor;   
}

function set_chosen_color(size_color){
    let cor=document.getElementById('cor_'+position_cor_escolhida(size_color)).style.backgroundColor;
    return cor;
}


function position_cor_escolhida(size_color){
    let posi_do_vetor;
    posi_do_vetor=Math.floor(Math.random()*size_color);
    return posi_do_vetor;
}


function put_colors(num){  
    let i;
    for(i=0;i<num;i++){
        let divcor=document.getElementById("cor_"+i);
        divcor.style.backgroundColor="rgb("+generate_color()+","+generate_color()+","+generate_color()+")"
    }    
}

function generate_color(){
    let num;
    num=Math.floor(Math.random()*255);
    return num;
}

function create_element_divcolor(num){
    let divcolor=document.createElement('div');
    divcolor.className="cores";
    divcolor.id="cor_"+num;
    return divcolor;
}

function get_father_div_colors(){
    let divfather=document.getElementsByClassName('box_cores')[0];
    return divfather;
}

function add_divscolors(colors_num){
    let i;
    for(i=0;i<colors_num;i++){
        get_father_div_colors().appendChild(create_element_divcolor(i))
    }
}


function add_event_btn_difficult(btn,num){
    btn.addEventListener('click', function(){
        add_divscolors(num);
        init_ALL(num);
        hidden_show_btn_difficult();
        return_init_txt();
    })
}

function get_btn_difficult(){
    let i;
    for(i=1;i<4;i++){
        let btn=document.getElementsByClassName('btn_difficult')[i-1];
        add_event_btn_difficult(btn,i*3+1);
    }
}

function remove_colors(size_color){
    let i;
    let cores=document.getElementsByClassName('cores')
    for(i=0;i<size_color;i++){
        get_father_div_colors().removeChild(get_father_div_colors().firstElementChild);

    } 
    
}

function hidden_show_btn_difficult(){
    let i;
    for(i=0;i<3;i++){
        hidden_show_element(document.getElementsByClassName('btn_difficult')[i]);
    }
}

function hidden_show_element(elemento){
    if(elemento.style.visibility=="hidden"){
    elemento.style.visibility="visible";
    }else{
    elemento.style.visibility="hidden";   
    }
}

function restart_game(){
    let btnreset=document.getElementById('btnreset');
    let cores=document.getElementsByClassName('cores');
    btnreset.addEventListener('click',function (){
        remove_colors(cores.length);
        hidden_show_btn_difficult();
        zera_init_txt();
        score=[];
        show_score();
    })
}

