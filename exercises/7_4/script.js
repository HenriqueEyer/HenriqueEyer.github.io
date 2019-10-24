window.onload = function() {
    
    var cartasImg = ['cinco-ouro','nove-de-espadas','quatro-de-paus','seis-de-copas','sete-de-espadas','sete-de-paus','tres-de-ouros']
    var animationNames=['scale-card','rotate-card','hide-card'];
    
    document.querySelector('.deck').addEventListener('click', function(){
        let card = createDivCard('div');
        addCard(card,document.querySelector('.grid-cards'));
        addClass(card,cartasImg[Math.floor(Math.random() * cartasImg.length)]);
        addClass(card,'card')
        addClass(card,animationNames[Math.floor(Math.random() * animationNames.length)]);
    })
    
    function addCard(elementChild , elementFather) {
        elementFather.appendChild(elementChild);
    }
    
    
    function createDivCard(tag) {
        return document.createElement(tag);
    }
    
    function addClass(element,nameClass){
        element.classList.add(nameClass);
    }
}


