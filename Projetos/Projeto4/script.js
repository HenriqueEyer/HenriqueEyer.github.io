addEventClickBtnInput();
setInitialPhrase();

function setInitialPhrase(){
    createLetter(splitPhrase(getTxtInput().value));
    let phrase=getTxtInput().value;
    phrase=splitPhrase(phrase).length;
}

function addEventClickWord(element){
    element.addEventListener('click', function(){    
        setRandomAttributes(this);
    })
}

function setRandomAttributes(element){
        setRandomFontColor(element);
        setRandomFontStyle(element);
        setRandomFontSize(element);
        setRandomBackgroundImage(element);
        setWordStyle(element);
}

function createLetter(phrase){
    let i;
    deleteLetter(getLetter());
    for(i=0;i<phrase.length;i++){
        if(phrase[i]!=""){ 
        let div=createWord();
        insertTextInElement(div,phrase[i]);
        setRandomAttributes(div);
        addEventClickWord(div);
        addElementInDiv(div);
        setWordCount(phrase);
        }
    }
    
}

function getLetter(){
    let element=document.getElementsByClassName('word');
    return element;
}

function deleteLetter(element){
    let i;
    if(element!=undefined){
        let sizeElements=element.length;
        for(i=0;i<sizeElements;i++){
            element[0].parentNode.removeChild(element[0])
        }
    }
}

function insertTextInElement(element,txt){
    element.innerHTML=txt;
}

function addElementInDiv(element){
    let div=document.getElementsByClassName('letter')[0];
    div.appendChild(element);
}

function setWordStyle(element){
    element.className="word";
}

function setRandomBackgroundImage(element){
    element.style.backgroundImage="url(./img"+randomNumber(4)+".png)";
}

function setRandomFontStyle(element){
    let styles=['italic','normal','oblique'];
    element.style.fontStyle=styles[randomNumber(styles.length)];
}


function setRandomFontColor(element){
    element.style.color="rgb("+randomNumber(255)+","+randomNumber(255)+","+randomNumber(255)+")";
}

function setRandomFontSize(element){
    let tamanho=(2+randomNumber(6))*10;
    element.style.fontSize=tamanho;
}

function randomNumber(intervalo){
    return Math.floor(Math.random()*intervalo)
}

function createWord(){
    return document.createElement('div');
}

function splitPhrase(txt){
    return txt.split(" ");
}

function addEventClickBtnInput(){
    returnBtnInput().addEventListener('click', function(){
        if(getTxtInput().value!=""){
            createLetter(splitPhrase(getTxtInput().value));
        }else{
            deleteLetter(getLetter());
        }
    })
}

function returnBtnInput(){
    return txtInput=document.getElementById('btn_input');
}

function getTxtInput(){
    return txtInput=document.getElementById('txtInput');
 
}

function getCountWord(){
    return document.getElementById('cont_word');
}

function setWordCount(wordCount){
    let cont;
    let wordNumber=wordCount.length;
    for(cont=0;cont<wordCount.length;cont++){
        if(wordCount[cont]==""){
            wordNumber--;
        }
    }
    getCountWord().innerText=wordNumber;
} 