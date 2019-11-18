window.onload = function() {

    const vetArticles=document.getElementsByClassName('notice');
    this.console.log(vetArticles);
    for(let element of vetArticles){
        console.log(element);
        element.addEventListener('click', function(){
            element.style.animation="";
            setTimeout(() => this.style.animation = 'articles-click 4s', 5);
        })
    }
}