add_event_click_btn_input();
txt_inicial()


function txt_inicial(){
    get_txt_input().value="Digite algo para ficar igual a mim !!"
    create_carta(split_frase(get_txt_input().value));
    put_number_element_cont_word(split_frase(get_txt_input().value).length);
}


function add_event_click_div_carta(element){
    element.addEventListener('click', function(){    
        put_attribute_fontColor_on_element(this);
        put_attribute_font_style_on_element(this);
        put_attribute_fontsize_on_element(this);
        put_attribute_imgbackground_on_element(this)
        put_attribute_class_on_element(this);
    })
}



function create_carta(frase){ 
    let i;
    delete_element(get_element_carta());
    for(i=0;i<frase.length;i++){ 
        let div=create_div();
        create_and_put_txt_div(div,frase[i]);
        put_attribute_fontColor_on_element(div);
        put_attribute_font_style_on_element(div);
        put_attribute_fontsize_on_element(div);
        put_attribute_imgbackground_on_element(div)
        put_attribute_class_on_element(div);
        add_event_click_div_carta(div);
        add_element_in_div(div);
        put_number_element_cont_word(get_element_carta().length);
    }
    
}

function get_element_carta(){
    let element=document.getElementsByClassName('divcartas');
    return element;
}

function delete_element(element){
    let i;
    
    if(element!=undefined){
        let size_elements=element.length;
        for(i=0;i<size_elements;i++){
            element[0].parentNode.removeChild(element[0])
        }
    }
}

function create_and_put_txt_div(element,txt){
    element.innerHTML=txt;
}

function add_element_in_div(element){
    let div=document.getElementsByClassName('div-output')[0];
    div.appendChild(element);
}

function put_attribute_class_on_element(element){
    element.className="divcartas";
}

function put_attribute_imgbackground_on_element(element){
    element.style.backgroundImage="url(/img"+random_number(4)+".png)";
}

function put_attribute_font_style_on_element(element){
    let styles=['italic','normal','oblique'];
    element.style.fontStyle=styles[random_number(3)];
}


function put_attribute_fontColor_on_element(element){
    element.style.color="rgb("+random_number(255)+","+random_number(255)+","+random_number(255)+")";
}

function put_attribute_fontsize_on_element(element){
    let tamanho=(2+random_number(6))*10
    
    element.style.fontSize=tamanho;
}

function random_number(intervalo){
    let num;
    num=Math.floor(Math.random()*intervalo)
    return num;
}

function create_div(){
    let div;
    div=document.createElement('div');
    return div;
}

function split_frase(txt){
    txt=txt.split(" ");
    return txt;
}


function add_event_click_btn_input(){
    return_btn_input().addEventListener('click', function(){
        if(get_txt_input().value!=""){
            create_carta(split_frase(get_txt_input().value));
        }else{
            delete_element(get_element_carta());
        }
    })
}


function return_btn_input(){
    let btn_input=document.getElementById('btn_input')
    return btn_input;
}

function get_txt_input(){
    let txt_input=document.getElementById('txt_input');
    return txt_input
}

function get_element_cont_word(){
    return document.getElementsByClassName('cont_word')[0];
}

function put_number_element_cont_word(word_count){
    get_element_cont_word().innerText=+word_count;
} 