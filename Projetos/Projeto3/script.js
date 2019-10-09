
var cor
var score=[0,0,0,0];//4 posiçoes [0]-armazena o valor total do score, [1]-verifica se já acertou ou não, [2]penultimo acerto,[3]ultimo acerto;

add_divscolors(6);
init_All(6);
hidden_show_btn_difficult();
hidden_show_element(document.getElementById('lbl-tex-difficult'));


function init_All(size_color){
    put_colors(size_color);
    cor=set_chosen_color(size_color);
    add_txt_cor(cor);
    add_event_click_in_colors();
    show_score();
}


function add_pontuacao_vetor(acerto){
    if(acerto){
        if((score[1]+score[2])>=6){
            update_score(4);
        }else{
            update_score(3);
        }
    }else{
        if(score[0]>0){
            if((score[1]+score[2])<-2){
                update_score(-2);
            }else{
                update_score(-1);
            } 
        }
    }
    show_score();
}

function show_score(){
    let getscore=document.getElementById('score');
    getscore.innerHTML=score[0];
}

function update_score(valor){
    score[2]=score[3];
    score[3]=valor;
    score[0]+=valor;
    if(score[0]<0){
        score[0]=0;
    }
    
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
        if(score[1]==0){
            desmarcar_cores();
            let cor_selecionada=return_color_element(this);
            let resposta=verify_Response(cor_selecionada,cor);
            change_txt_response(resposta,size_color)
            marcar_click(this);
        }else{
            alert('Já acertou!!! Clique no botão novas cores para continuar')
        }
    })
}

function return_color_element(elemento){
    return elemento.style.backgroundColor;
}

function verify_Response(clicado,resposta_certa){
    if(clicado==resposta_certa){
        add_pontuacao_vetor(true);
        score[1]=1;
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
        generate_new_colors(size_color);
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


function event_btn_difficult(btn,num){
    btn.addEventListener('click', function(){
        add_divscolors(num);
        init_All(num);
        hidden_show_btn_difficult();
        return_init_txt();
        hidden_show_element(document.getElementById('btnreset'));
        hidden_show_element(document.getElementById('btn-new-cores'));  
    })
}


function add_function_click_btn_custom_difficult(){
    let btn=document.getElementsByClassName('btn_difficult')[3];
    btn.addEventListener('click',function (){
        hidden_show_element(document.getElementById('text_difficult'))
        hidden_show_element(document.getElementById('lbl-tex-difficult'))
        hidden_show_btn_difficult();
        
    })
}
add_function_click_btn_custom_difficult();

function add_eventlistener_btn_difficult(){
    let i;
    let number=1;
    for(i=0;i<3;i++){
        let btn=document.getElementsByClassName('btn_difficult')[i];
        event_btn_difficult(btn,number*3);
        number++;
    }
}
add_eventlistener_btn_difficult();

function remove_colors(size_color){
    let i;
    for(i=0;i<size_color;i++){
        get_father_div_colors().removeChild(get_father_div_colors().firstElementChild);  
    } 
}

function add_event_change_in_text_difficult(){
    let txt=document.getElementById('text_difficult');
    txt.addEventListener('blur',function(){
        if(txt.value==1 || txt.value>20){
            alert("Numero deve ser entre 1 ou 20")
        }else{
            add_divscolors(txt.value);
            init_All(txt.value);
            hidden_show_element(txt);
            hidden_show_element(document.getElementById('lbl-tex-difficult'))
            return_init_txt();
            hidden_show_element(document.getElementById('btn-new-cores')); 
            hidden_show_element(document.getElementById('btnreset')); 
        }
    })
}
add_event_change_in_text_difficult();

function hidden_show_btn_difficult(){
    let i;
    for(i=0;i<4;i++){
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

function add_evente_btn_new_cores(){
    document.getElementById('btn-new-cores').addEventListener('click', function(){
        restart_cores();
    })
}
add_evente_btn_new_cores();

function restart_cores(){
    let cores=document.getElementsByClassName('cores');
    let guardar_tamanho=cores.length;
    if(cores.length!=0){
        remove_colors(cores.length);
        zera_init_txt();
        return_init_txt();
        add_divscolors(guardar_tamanho);
        init_All(guardar_tamanho);
        score[1]=0;
    }
}

function restart_game(){
    let btnreset=document.getElementById('btnreset');
    let cores=document.getElementsByClassName('cores');
    btnreset.addEventListener('click',function (){
        remove_colors(cores.length);
        hidden_show_btn_difficult();
        zera_init_txt();
        score[0]=0;
        show_score();
        hidden_show_element(btnreset);  
        hidden_show_element(document.getElementById('btn-new-cores'));   
    })
}
restart_game();